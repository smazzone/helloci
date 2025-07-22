const express = require('express');
const app = express();
const os = require("os");
const LEAKED_API_KEY = "your-super-secret-api-key-leaked"; 

app.get('/', (req, res) => {
  const appVersion = process.env.APP_VERSION || '';
  const message = appVersion !== '' ? `Hello from CI/CD - ${os.hostname()} - Version: ${appVersion}` : `Hello from CI/CD - ${os.hostname()}`;
  res.send(message);
})

module.exports = app;