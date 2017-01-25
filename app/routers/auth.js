var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
