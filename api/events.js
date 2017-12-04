'use strict';

const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../db');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = router
  .get('/events', requireAuth, (req, res, next) => {
    db("events").then(data => {
      res.send(data);
    }, next);
  })
  // .get('/events', (req, res, next) => {
  //   db("events").then(data => {
  //     res.send(data);
  //   }, next);
  // });