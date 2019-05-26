'use strict'

const { Project } = require('../../models');

module.exports = (params, callback) => {
  validateParams(params)
    .then(() => {
      saveProject(params)
        .then(project => callback(null, {status: true, result: project}))
        .catch(error => callback(error, null))
    })
    .catch(error => callback(error, null))
};

function validateParams(params) {
  return new Promise((resolve, reject) => {
    const { name } = params;
    if (!name) {
      return reject({
        status: false,
        message: 'Must provide parameters to create new project.'
      })
    }
    return resolve();
  })
}

function saveProject(params) {
  return new Promise((resolve, reject) => {
    try {
      const Model = new Project(params);
      Model.save(params).then(project => resolve(project))
    } catch (error) {
      reject(error)
    }
  })
}
