'use strict';

let express = require('express');
let router = express.Router();
let randomNumberMiddleware = require('./randomNumber');

router.get('/c', randomNumberMiddleware, (request,response) => {
    response.status(200)
    .send('Route C');
  });
  
router.get('/d', (request,response) => {
    response.status(200)
    .send('Route D');
  });

  module.exports = router;