require('dotenv').config();
const mongoose = require('mongoose');

const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
mongoose.Promise = Promise;

module.exports = mongoose;