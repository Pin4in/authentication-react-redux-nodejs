'use strict';

const config    = require('../config.js');
const db        = require('../db');
const jwt       = require('jwt-simple');
const passport  = require('passport');
const router    = require('express').Router();

function tokenForUser(user) {
  const sub = user.id;
  const iat = new Date().getTime();
  return jwt.encode({sub, iat}, config.jwt_secret);
}

router
  .post("/signup",  function(req, res, next) {
    passport.authenticate('signup', function(err, user, info) {
      if (err) { 
        return next(err); 
      }
      if (!user) { 
        return res.send({
          authenticated: false,
          message: info.message
        }); 
      }
      req.logIn(user, { session: false }, function(err) {
        if (err) { return next(err); }
        return res.send({
          token: tokenForUser(user),
          user: req.user,
          authenticated: req.isAuthenticated(),
        });
      });
    })(req, res, next);
  })
  .post('/login', (req, res, next) => {
    passport.authenticate('local', { session: false }, function(err, user, info) {
      if (err) { 
        return next(err); 
      }
      if (!user) { 
        return res.send({
          authenticated: false,
          message: info.message
        }); 
      }
      req.logIn(user, { session: false }, function(err) {
        if (err) { return next(err); }
        return res.json({
          token: tokenForUser(user),
          user: req.user,
          authenticated: req.isAuthenticated(),
        });
      });
    })(req, res, next);
  })
  .get('/logout', (req, res, next) => {
    req.session.destroy(err => {
      res.send({
        authenticated: false,
      });
    });
  })
;

module.exports = router;


// router.post('/login', (req, res, next) => {
//   const validationResult = validateLoginForm(req.body);
//   if (!validationResult.success) {
//     return res.status(400).json({
//       success: false,
//       message: validationResult.message,
//       errors: validationResult.errors
//     });
//   }


//   return passport.authenticate('local-login', (err, token, userData) => {
//     if (err) {
//       if (err.name === 'IncorrectCredentialsError') {
//         return res.status(400).json({
//           success: false,
//           message: err.message
//         });
//       }

//       return res.status(400).json({
//         success: false,
//         message: 'Could not process the form.'
//       });
//     }


//     return res.json({
//       success: true,
//       message: 'You have successfully logged in!',
//       token,
//       user: userData
//     });
//   })(req, res, next);
// });