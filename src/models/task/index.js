'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const Schema = Mongoose.Schema;

const Task = new Schema({
  projectId: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    require: true,
    default: new Date()
  },
  finishDate: {
    type: Date,
  },
  status: {
    type: Boolean,
    default: 'open'
  }
});

Task.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = Mongoose.model('Task', Task);
