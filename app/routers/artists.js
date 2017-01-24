var express = require('express');
var router = express.Router();
var Artist = require('../models/artist');

router.get('/', (req, res) => {
  Artist.find((err, artists) => {
    if(err) console.error(err);
    res.send(artists);
  });
});

router.get('/:id', (req, res) => {
  Artist.findById(req.params.id, (err, artist) => {
    if(err) console.error(err);
    artist.populatePieces(lean = true, (artist) => {
      res.json(artist);
    });
  });
});

module.exports = router;
