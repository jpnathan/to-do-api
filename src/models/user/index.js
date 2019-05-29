'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Schema = Mongoose.Schema;

const User = new Schema({
  email: String,
  password: String,
  confirmPassword: String
});

User.plugin(AutoIncrement, {inc_field: 'id'});
User.pre('save', function(next){
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});
module.exports = Mongoose.model('User', User);
