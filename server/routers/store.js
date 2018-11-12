var express = require('express');

module.exports = function(app, basepath) {
  var router = express.Router();

  router.get('/store/inventory', function (req, res, next) {
    res.json({});
  })

  router.post('/store/order', function (req, res, next) {
    res.json({});
  })

  router.get('/store/order/:orderId', function (req, res, next) {
    res.json({});
  })

  router.delete('/store/order/:orderId', function (req, res, next) {
    res.json({});
  })

  app.use(basepath, router);

}

