'use strict'

const Mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(Mongoose);
const Schema = Mongoose.Schema;

const Project = new Schema({
  name: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

Project.plugin(AutoIncrement, {inc_field: 'projectId'});
module.exports = Mongoose.model('Project', Project);
