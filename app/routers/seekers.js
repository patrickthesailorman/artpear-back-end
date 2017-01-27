var express = require('express');
var router = express.Router();
var Seeker = require('../models/seeker');

router.route('/')
  .get((req, res, next) => {
    Seeker.find()
      .then((seeker) => {
        res.json(seeker);
      })
      .catch((err) => console.error(err));
  })
  .post((req, res, next) => {
    var seeker = new Seeker(req.body);
    Seeker.register(seeker, req.body.password, (err, seeker) => {
      if(err) return next(err);
      Seeker.authenticate()(req, res, () => {
        req.session.save((err) => {
          if(err) return next(err);
          res.json(seeker);
        });
      });
    })
  });

router.route('/:id')
  .get((req, res, next) => {
    Seeker.findById(req.params.id)
      .then((seeker) => {
        res.json(seeker);
      })
      .catch((err) => console.error(err));
  })
  .put((req, res, next) => {
    // https://github.com/Automattic/mongoose/issues/2262
    Seeker.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((seeker) => {
        res.json(seeker);
      })
      .catch((err) => console.error(err));
  })
  .delete((req, res, next) => {
    Seeker.findByIdAndRemove(req.params.id)
      .then((seeker) => {
        // https://tools.ietf.org/html/rfc7231#section-4.3.5
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  });


module.exports = router;
