'use strict';

const app = require('express')();
const port = 3000;

module.exports = (cb) => {
  const callbackUrl = 'http://localhost:3000/callback';
  let aToken = ""; //store of access and refresh tokens 

  //establish a listener for the oauth callback
  app.listen(port, (err) => {
    if (err) return console.error(err);

    console.log(`Express server listening at http://localhost:${port}`);

    return cb({
      app,
      callbackUrl,
      aToken,
    });
  });
};