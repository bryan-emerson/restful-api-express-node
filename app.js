const express = require('express');

const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('Welcome Friends! This is my API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
