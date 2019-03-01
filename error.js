'use strict';

module.exports = (error, request, response, next) => {
    console.log('Error Handler');
    response.status(500);
    response.send('ERROR');
};