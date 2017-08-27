'use strict';

const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const db = require('./db');


passport.use(new LocalStrategy({ usernameField: 'email' }, authentication));
passport.use('local-register', new LocalStrategy({passReqToCallback: true}, register))


passport.serializeUser((user, done) => {
  done(null, user.id);
})
passport.deserializeUser((id, done) => {
  db('users')
    .where('id', id)
    .first()
    .then(user => {
        done(null, user)
    })
    .catch(err => done(err));
})



function authentication(email, password, done) {
  db('users')
    .where('email', email)
    .first()
    .then((user) => {
      if(!user || !bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: 'invalid email and password combination'});
      }
      done(null, user);
    })
    .catch(err => {
      console.log('error occured!');
      done(err)
    });
}


function register(req, username, password, done) {
  db('users')
    .where('email', req.body.email)
    .first()
    .then((user) => {
      if (user) {
        return done(null, false, {message: 'an account with that email has already been created'});
      }
      if (password !== req.body.password2) {
        return done(null, false, {message: "passwords don't match"})
      }

      const newUser = {
        name: username,
        email: req.body.email,
        password: bcrypt.hashSync(password)
      };
      console.log(newUser);

      db('users')
        .insert(newUser)
        .then((ids) => {
          newUser.id = ids[0];
          done(null, newUser);
        })
    });
}