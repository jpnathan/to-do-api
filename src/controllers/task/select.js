'use strict'

const { Task } = require('../../models');

module.exports = (request, callback) => {
  getTasksFromDataBase(request)
    .then(project => callback(null, {status: true, result: project}))
    .catch((error) => callback(error, null))
};

function getTasksFromDataBase(request) {
  return new Promise((resolve, reject) => {
    try {
      const { id } = request.params;
      const { userId } = request.body;
      const query = id && {userId: userId, projectId: id} || {userId: userId};
  
      Task.find(query).then(projects => resolve(projects))

    } catch (e) {
      reject({
        status: false,
        message: 'Project not found.'
      })
    }
  })
}
