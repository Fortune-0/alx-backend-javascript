const express = require('express');

// const host = '127.0.0.1';
const port = 1245;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});


app.listen(port, () => {
    console.log(`Server is live, running at http://${port}`);
  });
  
module.exports = app;
