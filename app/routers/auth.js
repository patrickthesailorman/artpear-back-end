var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
  req.session.save((err) => {
    if(err) return next(err);
    res.sendStatus(200);
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
