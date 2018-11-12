var expect = require('chai').expect;
var http = require('http');

before(function(done){
  require(process.cwd() + '/server/server');
  setTimeout(done, 5000); // Waiting 5 seconds for server to start
  this.timeout(10000);
});

    it('Testing GET for /user route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /user/createWithArray route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/createWithArray'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /user/createWithList route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/createWithList'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
describe('Testing /v1/user/login',function(){
    it('Testing GET for /user/login route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/login'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
describe('Testing /v1/user/logout',function(){
    it('Testing GET for /user/logout route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/logout'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
describe('Testing /v1/user/:username',function(){
    it('Testing GET for /user/:username route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/:username'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /user/:username route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/:username'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });
    it('Testing GET for /user/:username route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/user/:username'
       };

       var callback = function(response){
         response.on('data', function (chunk) {
         responseString += chunk;
       });

       response.on('end', function () {
         expect(responseString).to.equal('{}');
         done();

       });
      };

      http.request(options, callback).end();
    });
  });

