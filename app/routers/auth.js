var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
