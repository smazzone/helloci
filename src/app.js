const express = require('express');
const app = express();
const os = require("os");
const LEAKED_API_KEY = "1234567890";
const PASSWORD = "1234567890" 

app.get('/', (req, res) => {
  const appVersion = process.env.APP_VERSION || '';
  const message = appVersion !== '' ? `Hello from CI/CD - ${os.hostname()} - Version: ${appVersion}` : `Hello from CI/CD - ${os.hostname()}`;
  res.send(message);
})

module.exports = app;