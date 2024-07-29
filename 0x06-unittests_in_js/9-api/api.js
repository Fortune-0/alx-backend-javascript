/**
 * Simple express server
 */
const express = require('express');

const host = '127.0.0.1';
const port = 7865;
const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Welcome to the payment system!');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.statusCode = 200;
  res.send('Payment methods for cart :id ${req.params.id}');
  // res.json({
  //   id: parseInt(req.params.id),
  //   items: ['Item 1', 'Item 2', 'Item 3'],
  });

app.listen(port, host, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
