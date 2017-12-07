'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');

const auth = require('./api/auth');
const users = require('./api/users');
const events = require('./api/events');
const app = express();
require('./passport.js');


const clientApp = `${__dirname}/client/build`


app
  .use(morgan('dev'))
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: false}))
  .use(session({ secret: "may the force be with you", resave: false, saveUninitialized: false }))
  .use(passport.initialize())
  .use(passport.session())
  .use(express.static(clientApp))
  .use(auth)
  .use(users)
  .use(events)
;

app.listen(3030);