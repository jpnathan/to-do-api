'use strict'

const { Task } = require('../../models');

module.exports = (params, callback) => {
  const { id } = params.params;
  validateParams(id)
    .then(() => {
      updateTask(id, params.body)
        .then(project => callback(null, {status: true, result: project}))
        .catch(error => callback(error, null))
    })
    .catch(error => callback(error, null))
  
};

function validateParams(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject({
        status: false,
        message: 'Must provide an ID to update a task.'
      })
    }
    return resolve();
  })
}

function updateTask(id, params) {
  return new Promise((resolve, reject) => {
    try {
      Task.findOneAndUpdate({projectId: id}, {$set: params}, {new: true})
        .then(project => resolve(project))
    } catch (e) {
      reject({
        status: false,
        message: 'Task not found'
      })
    }
  });
}
