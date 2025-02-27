const express = require('express');
const app = express();
const os = require("os");


app.get('/', (req, res) => {
  res.send('Hello CI/CD! from ' + os.hostname())
})

module.exports = app;