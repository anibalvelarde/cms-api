var express = require('express');

module.exports = function(app, basepath) {
  var router = express.Router();

  router.post('/contact', function (req, res, next) {
    res.json({});
  })

  router.put('/contact', function (req, res, next) {
    res.json({});
  })

  router.get('/contact/findByStatus', function (req, res, next) {
    res.json({});
  })

  router.get('/contact/findByTags', function (req, res, next) {
    res.json({});
  })

  router.get('/contact/:contactId', function (req, res, next) {
    res.json({});
  })

  router.post('/contact/:contactId', function (req, res, next) {
    res.json({});
  })

  router.delete('/contact/:contactId', function (req, res, next) {
    res.json({});
  })

  router.post('/contact/:contactId/uploadImage', function (req, res, next) {
    res.json({});
  })

  app.use(basepath, router);

}

