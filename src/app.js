
const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/books', require('./routes/books'));

module.exports = app;
