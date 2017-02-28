var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const {firstName, lastName, email, kind} = req.user;
  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    kind: kind
  };
  res.json(user);
});

router.post('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
