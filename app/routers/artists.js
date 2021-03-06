var express = require('express');
var passport = require('passport');
var router = express.Router();
var Artist = require('../models/artist');

router.route('/')
  .get((req, res, next) => {
    Artist.find()
      .then((artist) => {
        res.json(artist);
      })
      .catch((err) => console.error(err));
  })
  .post((req, res, next) => {
    var artist = new Artist(req.body);
    Artist.register(artist, req.body.password, (err, artist) => {
      if(err) return next(err);
      res.json(artist);
    })
  });

router.route('/:id')
  .get((req, res, next) => {
    Artist.findById(req.params.id)
      .then((artist) => {
        res.json(artist);
      })
      .catch((err) => console.error(err));
  })
  .put((req, res, next) => {
    // https://github.com/Automattic/mongoose/issues/2262
    Artist.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((artist) => {
        res.json(artist);
      })
      .catch((err) => console.error(err));
  })
  .delete((req, res, next) => {
    Artist.findByIdAndRemove(req.params.id)
      .then((artist) => {
        // https://tools.ietf.org/html/rfc7231#section-4.3.5
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  });


module.exports = router;
