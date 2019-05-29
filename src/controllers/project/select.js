'use strict'

const { Project } = require('../../models');

module.exports = (request, callback) => {
  getProjectFromDataBase(request)
    .then(project => callback(null, {status: true, result: project}))
    .catch((error) => callback(error, null))
};

function getProjectFromDataBase(request) {
  return new Promise((resolve, reject) => {
    try {
      const { id } = request.params;
      const { userId } = request.body;
      const query = id && {userId: userId, projectId: id} || {userId: userId};

      Project.find(query).then(projects => resolve(projects))

    } catch (e) {
      reject({
        status: false,
        message: 'Project not found.'
      })
    }
  })
}
