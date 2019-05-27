'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const Schema = Mongoose.Schema;

const Task = new Schema({
  projectId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creationDate: {
    type: Date,
    required: true,
    default: new Date()
  },
  finishDate: {
    type: Date,
  },
  enabled: {
    type: Boolean,
    required: true,
    default: true
  }
});

Task.plugin(AutoIncrement, {inc_field: 'taskId'});
module.exports = Mongoose.model('Task', Task);
