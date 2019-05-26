'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const Schema = Mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  confirmPassword: String
});

User.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = Mongoose.model('User', User);
