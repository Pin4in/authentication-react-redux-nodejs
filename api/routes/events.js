'use strict';

const express = require('express');
const router = express.Router();
const db = require('../../db');

module.exports = router
  .get('/events', (req, res, next) => {
    db("events").then(data => {
      res.send(data);
    }, next);
  });