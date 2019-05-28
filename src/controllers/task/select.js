'use strict'

const { Task } = require('../../models');

module.exports = (params, callback) => {
  getTasksFromDataBase(params)
    .then(project => callback(null, {status: true, result: project}))
    .catch((error) => callback(error, null))
};

function getTasksFromDataBase(params) {
  return new Promise((resolve, reject) => {
    try {
      const { id } = params;
      const query = id && {projectId: id} || {};
  
      Task.find(query).then(projects => resolve(projects))

    } catch (e) {
      reject({
        status: false,
        message: 'Project not found.'
      })
    }
  })
}
