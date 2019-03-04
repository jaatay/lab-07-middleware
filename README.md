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

#### `requestTime.js`
##### API request body-> middleware DTG stamp for all requests, sent to console along with path

#### `routes.js`
##### middleware module -> allows /c and /d routes in API calls

#### `squareNumber.js`
##### API request body that takes number from user -> squares the number and displays back to user in reponse

#### `notFound.js`
##### middleware module -> handles 404 on routes not found

#### `error.js`
##### middleware module -> error handling


### Setup
#### `.env` requirements
* `PORT` - Local default port

#### Running the app
* `npm start` to start
* `npm run test` to run jest tests

#### Tests
*  Branch rule testing build via Travis, linked to repo. All branches required passing build prior to merge into Master branch.

* Assertions

TBD - currently only tests are travis builds

#### Acknoledgements
vladimirsan - outline and starter code
