const express = require('express');
const app = express();
const os = require("os");


app.get('/', (req, res) => {
  const appVersion = process.env.APP_VERSION || '';
  const message = appVersion !== '' ? `Hello CI/CD from ${os.hostname()} - Version: ${appVersion}` : `Hello CI/CD! from ${os.hostname()}`;
  res.send(message);
})

module.exports = app;