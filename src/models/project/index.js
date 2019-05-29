'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const Schema = Mongoose.Schema;

const Project = new Schema({
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  userId: {
    type: String,
    required: true
  }
});

Project.plugin(AutoIncrement, {inc_field: 'projectId'});
module.exports = Mongoose.model('Project', Project);
