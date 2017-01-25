var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var config = require('./config');
var app = express();

var artistsRouter = require('./app/routers/artists');
var seekersRouter = require('./app/routers/seekers');
var opportunitiesRouter = require('./app/routers/opportunities');
var responsesRouter = require('./app/routers/responses');
var authRouter = require('./app/routers/auth');

var port = process.env.PORT || 8080;
var User = require('./app/models/user');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// https://github.com/expressjs/session#sessionoptions
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiPrefix = '/api';

app.use(`${apiPrefix}/artists`, artistsRouter);
app.use(`${apiPrefix}/seekers`, seekersRouter);
app.use(`${apiPrefix}/opportunities`, opportunitiesRouter);
app.use(`${apiPrefix}/responses`, responsesRouter);
app.use(`${apiPrefix}/auth`, authRouter);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
