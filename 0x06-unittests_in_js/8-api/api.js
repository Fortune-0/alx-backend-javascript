/**
 * Simple express server
 */
const express = require('express');

const host = '127.0.0.1';
const port = 7865;
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system!');
});

app.listen(port, host, () => {
  console.log(`Server is live, running at http://${host}:${port}`);
});

module.exports = app;
