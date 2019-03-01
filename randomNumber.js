'use strict';

module.exports = (request, response, next) => {
    console.log(Math.floor(Math.random() * 100));
   next();
}