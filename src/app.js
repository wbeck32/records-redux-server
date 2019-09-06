require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('./helpers/error-handler');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('../public'));

const records = require('./routes/route');

app.use('/api/records', records);

app.use(errorHandler());

module.exports = app;
