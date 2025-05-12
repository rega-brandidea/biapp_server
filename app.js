const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const userRoutes = require('./routes/userRoutes');
app.use('/biapp', userRoutes);

module.exports = app;