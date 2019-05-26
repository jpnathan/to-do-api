'use strict'

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  confirmPassword: String
});

module.exports = Mongoose.model('User', User);
