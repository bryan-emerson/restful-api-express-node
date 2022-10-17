const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/bookAPI');
const bookRouter = express.Router();
const port = process.env.port || 3000;
const Book = require('./models/bookModel');

bookRouter.route('/books')
  .get((req, res) => {
    const response = { hello: 'Hi from the API' };
    res.json(response);
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome Friends! This is my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
