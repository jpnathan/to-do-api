'use strict'

const { Task } = require('../../models');

module.exports = (params, callback) => {
  const { id } = params;
  
  if (!id) {
    return callback({
      status: false,
      message: 'Must provide a ID to delete a task.'
    }, null)
  }
  
  Task.deleteOne({taskId: id})
    .then(project => callback(null, {status: true, result: project}))
};
