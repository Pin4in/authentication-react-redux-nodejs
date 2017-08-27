'use strict';

const passport = require('passport');
const router = require('express').Router();

const db = require('../../db');

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
  .post('/login', passport.authenticate('local'), (req, res) => {
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