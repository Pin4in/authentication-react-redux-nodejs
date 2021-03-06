'use strict';

// SIGNUP -> VALIDATE -> CREATE NEW USER -> TOKEN
// SIGNIN -> VALIDATE -> TOKEN
// AUTH REQUEST -> VALIDATE TOKEN -> RESOURSE ACCESS


const config         = require('./config.js');
const db             = require('./db');
const knex           = require('knex');
const passport       = require('passport');
const jwtStrategy    = require('passport-jwt').Strategy;
const extractJwt     = require('passport-jwt').ExtractJwt;
const LocalStrategy  = require('passport-local').Strategy;
const bcrypt         = require('bcrypt-nodejs');


const jwtOptions = {
  jwtFromRequest: extractJwt.fromHeader('authorization'),
  secretOrKey: config.jwt_secret
};
const signupOptions = {
  usernameField : 'name',
  passwordField : 'password',
  passReqToCallback : true
};

passport.use(new jwtStrategy(jwtOptions, jwtLogin));
passport.use(new LocalStrategy({ usernameField: 'email'}, login));
passport.use('signup', new LocalStrategy(signupOptions, signup))

function jwtLogin(payload, done) {
  db('users')
    .where('id', payload.sub)
    .first()
    .then(user => {
        done(null, user)
    })
    .catch(err => done(err));
}

function login(email, password, done) {
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

function signup(req, name, password, done) {
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
        name,
        email: req.body.email,
        password: bcrypt.hashSync(password)
      };

      db('users')
        .insert(newUser)
        .then((ids) => {
          newUser.id = ids[0];
          done(null, newUser);
        })
    });
}

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// })
// passport.deserializeUser((id, done) => {
//   db('users')
//     .where('id', id)
//     .first()
//     .then(user => {
//         done(null, user)
//     })
//     .catch(err => done(err));
// })