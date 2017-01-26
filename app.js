var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var passport = require('passport');
var cors = require('cors');
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

// https://github.com/expressjs/cookie-session#api
app.use(cookieSession({
  // https://devcenter.heroku.com/articles/heroku-local
  secret: process.env.SESSION_SECRECT || 'secret',
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiPrefix = '/api';

app.use(cors());
app.options('*', cors());

app.use(`${apiPrefix}/artists`, artistsRouter);
app.use(`${apiPrefix}/seekers`, seekersRouter);
app.use(`${apiPrefix}/opportunities`, opportunitiesRouter);
app.use(`${apiPrefix}/responses`, responsesRouter);
app.use(`${apiPrefix}/auth`, authRouter);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
