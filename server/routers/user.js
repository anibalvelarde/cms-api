var express = require('express');

module.exports = function(app, basepath) {
  var router = express.Router();

  router.post('/user', function (req, res, next) {
    res.json({});
  })

  router.post('/user/createWithArray', function (req, res, next) {
    res.json({});
  })

  router.post('/user/createWithList', function (req, res, next) {
    res.json({});
  })

  router.get('/user/login', function (req, res, next) {
    res.json({});
  })

  router.get('/user/logout', function (req, res, next) {
    res.json({});
  })

  router.get('/user/:username', function (req, res, next) {
    res.json({});
  })

  router.put('/user/:username', function (req, res, next) {
    res.json({});
  })

  router.delete('/user/:username', function (req, res, next) {
    res.json({});
  })

  app.use(basepath, router);

}

