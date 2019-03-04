'use strict';

const express = require('express');
const errorMiddleware = require('./error');
const notFoundMiddleware = require('./notFound');
const requestTimeMiddleware = require('./requestTime');
const randomNumberMiddleware = require('./randomNumber');
const squareNumber = require('./squareNumber');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 8080;

const numberSquared = number => {
  return number * number;
};

app.use(requestTimeMiddleware);
app.use(routes);


app.get('/a', (request,response) => {
  response.status(200)
  .send('Route A');
});

app.get('/b', (request,response) => {
  response.status(200)
  .send('Route B');
});

app.get('/b/:number', squareNumber, (request,response) => {
  let originalNumber = request.params.number;
  response.status(200)
  .send(`Original Number: ${originalNumber}, Squared: ${response.params}`);
});

app.get('/*', notFoundMiddleware, (request, response) => {
  response.status(404)
  .send('Not found');
  });

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
