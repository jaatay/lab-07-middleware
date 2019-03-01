'use strict';

module.exports = (req, res, next) => {
    console.log('Unknown Route Request');
    res.status(404);
    res.send('404: Please use an acceptable route, or...');
    res.end();
}