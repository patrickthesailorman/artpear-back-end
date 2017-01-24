var express = require('express');
var router = express.Router();
var Response = require('../models/response');

router.route('/')
  .get((req, res, next) => {
    Response.find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.error(err));
  })
  .post((req, res, next) => {
    Response.create(req.body.response)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.error(err));
  });

router.route('/:id')
  .get((req, res, next) => {
    Response.findById(req.params.id)
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.error(err));
  })
  .put((req, res, next) => {
    // https://github.com/Automattic/mongoose/issues/2262
    Response.findByIdAndUpdate(req.params.id, req.body.response, {new: true})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.error(err));
  })
  .delete((req, res, next) => {
    Response.findByIdAndRemove(req.params.id)
      .then((response) => {
        // https://tools.ietf.org/html/rfc7231#section-4.3.5
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  });


module.exports = router;
