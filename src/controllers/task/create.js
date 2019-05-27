'use strict'

const { Task } = require('../../models');

module.exports = (params, callback) => {
  validateParams(params)
    .then(() => {
      saveTask(params)
        .then(project => callback(null, {status: true, result: project}))
        .catch(error => callback(error, null))
    })
    .catch(error => callback(error, null))
};

function validateParams(params) {
  return new Promise((resolve, reject) => {
    const { projectId, description } = params;
    if (!projectId && !description) {
      return reject({
        status: false,
        message: 'Must provide parameters to create new task.'
      })
    }
    return resolve();
  })
}

function saveTask(params) {
  return new Promise((resolve, reject) => {
    try {
      const Model = new Task(params);
      Model.save(params).then(project => resolve(project))
    } catch (error) {
      reject(error)
    }
  })
}
