# lab-07-middleware

![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

### Author: Jesse Atay

[![Build Status](https://travis-ci.org/jaatay/lab-07-middleware.svg?branch=master)](https://travis-ci.org/jaatay/lab-07-middleware)

### Links and Resources
* [repo](https://github.com/jaatay/lab-07-middleware)


### Modules
#### `server.js`
##### express app -> server export


### Setup
#### `.env` requirements
* `PORT` - Local default port

#### Running the app
* `npm start` to start
* `npm run test` to run jest tests

#### Tests
* Tests conducted via node using Jest test package. Branch rule testing build via Travis, linked to repo. All branches required passing build prior to merge into Master branch.

* Assertions

describe('web server', () => {

  it('should respond with a 500 on an error', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);

  });
  
  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);

  });

  it('should respond properly on request to /api/v1/posts', () => {

    return mockRequest
      .get('/api/v1/posts')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);

  });

});

#### Acknoledgements
vladimirsan - outline and starter code
