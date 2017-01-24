var express = require('express');
var router = express.Router();
var Opportunity = require('../models/opportunity');

router.route('/')
  .get((req, res, next) => {
    Opportunity.find()
      .then((opportunity) => {
        res.json(opportunity);
      })
      .catch((err) => console.error(err));
  })
  .post((req, res, next) => {
    Opportunity.create(req.body.opportunity)
      .then((opportunity) => {
        res.json(opportunity);
      })
      .catch((err) => console.error(err));
  });

router.route('/:id')
  .get((req, res, next) => {
    Opportunity.findById(req.params.id)
      .then((opportunity) => {
        res.json(opportunity);
      })
      .catch((err) => console.error(err));
  })
  .put((req, res, next) => {
    // https://github.com/Automattic/mongoose/issues/2262
    Opportunity.findByIdAndUpdate(req.params.id, req.body.opportunity, {new: true})
      .then((opportunity) => {
        res.json(opportunity);
      })
      .catch((err) => console.error(err));
  })
  .delete((req, res, next) => {
    Opportunity.findByIdAndRemove(req.params.id)
      .then((opportunity) => {
        // https://tools.ietf.org/html/rfc7231#section-4.3.5
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  });


module.exports = router;
