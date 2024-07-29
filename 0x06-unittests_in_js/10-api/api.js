const express = require('express');
const app = express();
const port = 7865;

app.get('/', function (req, res) {
  res.statusCode = 200;
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', function (req, res) {
  res.statusCode = 200;
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', function (req, res) {
  const paymentMethods = {
    credit_cards: true,
    paypal: false
  }
  res.status(200).json({payment_methods: paymentMethods});
  // res.send('Available payment methods');
});

app.listen(port, function () {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
