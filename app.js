'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');

const auth = require('./api/routes/auth');
const users = require('./api/routes/users');
const app = express();
require('./passport.js');


const clientApp = `${__dirname}/frontend-client/build`

app
  .set('view engine', 'hjs')
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(session({ secret: "may the force be with you", resave: false, saveUninitialized: false }))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(clientApp))
  .use(auth)
  .use(users)
;

app.listen(3030);