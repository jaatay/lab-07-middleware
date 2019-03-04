'use strict';

module.exports = (request, response, next) => {
    let number = request.params.number * request.params.number;
    console.log(`number squared: ${number}`);
    response.params = number;
   next();
}