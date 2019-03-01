'use strict';

module.exports = (request, response, next) => {
    let date = new Date();
    request.requestTime = date;
    console.log(request.requestTime, request.path);
   next();
}