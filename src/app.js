const express = require('express');
const app = express();
const os = require("os");
const LEAKED_API_KEY = "b780002b85d6411ca0ad9f9c60195f72";

app.get('/', (req, res) => {
  const appVersion = process.env.APP_VERSION || '';
  const message = appVersion !== '' ? `Hello from CI/CD - ${os.hostname()} - Version: ${appVersion}` : `Hello from CI/CD - ${os.hostname()}`;
  res.send(message);
})

module.exports = app;