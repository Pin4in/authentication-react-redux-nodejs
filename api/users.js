'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');


module.exports = router
  .get("/users", (req, res, next) => {
    db("users").then(data => {
      res.send(data);
    }, next);
  })
  .post("/users", (req, res, next) => {
    db("users")
      .insert(req.body)
      .then(userId => {
          res.send(userId);
      }, next);
  })
  .get("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .first()
      .then(user => {
          if(!user) {
              return res.send('no such user');
          }
          res.send(user);
      }, next);
  })
  .put("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .update(req.body)
      .then(result => {
        if (result === 0) {
          return res.send(400);
        }
        return res.send(200);
      },next);
  })
  .delete("/users/:id", (req, res, next) => {
    const { id } = req.params;

    db("users")
      .where("id", id)
      .delete()
      .then(result => {
        if (result === 0) {
          return res.send(400);
        }
        return res.send(200);
      },next);
  })