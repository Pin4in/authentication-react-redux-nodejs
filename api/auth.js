'use strict';

const passport = require('passport');
const router = require('express').Router();

const db = require('../db');

router
  .get('/signup', (req, res) => {
    res.render('signup');
  })
  .post("/signup", passport.authenticate("local-register"), (req, res) => {
    res.send({
      session: req.session,
      user: req.user,
      authenticated: req.isAuthenticated
    });
  })
  .get('/login', (req, res) => {
    res.render('login');
  })
  .post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { 
        return next(err); 
      }
      if (!user) { 
        return res.send({
          authenticated: false,
          message: info.message
        }); 
      }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        console.log(`login: user id:${user.id}`);
        return res.send({
          session: req.session,
          user: req.user,
          authenticated: req.isAuthenticated(),
        });
      });
    })(req, res, next);
  })
  .post('/login', passport.authenticate('local'), (req, res) => {
    console.log('response', res);
    res.send({
      session: req.session,
      user: req.user,
      authenticated: req.isAuthenticated(),
    });
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