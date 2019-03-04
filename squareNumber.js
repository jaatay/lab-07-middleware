'use strict';

module.exports = (request, response, next) => {
    let number = request.number;
    console.log(`request number: ${number}`);
   next();
}