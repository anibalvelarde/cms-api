var expect = require('chai').expect;
var http = require('http');

before(function(done){
  require(process.cwd() + '/server/server');
  setTimeout(done, 5000); // Waiting 5 seconds for server to start
  this.timeout(10000);
});

    it('Testing GET for /contact route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact'
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
    it('Testing GET for /contact route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact'
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
describe('Testing /v1/contact/findByStatus',function(){
    it('Testing GET for /contact/findByStatus route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/findByStatus'
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
describe('Testing /v1/contact/findByTags',function(){
    it('Testing GET for /contact/findByTags route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/findByTags'
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
describe('Testing /v1/contact/:contactId',function(){
    it('Testing GET for /contact/:contactId route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/:contactId'
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
    it('Testing GET for /contact/:contactId route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/:contactId'
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
    it('Testing GET for /contact/:contactId route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/:contactId'
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
    it('Testing GET for /contact/:contactId/uploadImage route',function(done){
      var responseString = '';

       var options = {
          host: 'localhost',
          port: process.env.PORT || 3000,
          path: '/v1/contact/:contactId/uploadImage'
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

