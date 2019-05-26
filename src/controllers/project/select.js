'use strict'

const { Project } = require('../../models');

module.exports = (params, callback) => {
  const { id } = params;
  getProjectFromDataBase(params)
    .then(project => callback(null, {status: true, result: project}))
    .catch((error) => callback(error, null))
};

function getProjectFromDataBase(params) {
  return new Promise((resolve, reject) => {
    try {
      const { id } = params;
      const query = id && {projectId: id} || {};

      Project.find(query).then(projects => resolve(projects))

    } catch (e) {
      reject({
        status: false,
        message: 'Project not found.'
      })
    }
  })
}

function getProjects() {
  return new Promise((resolve, reject) => {
    try {
    } catch (e) {
      reject({
        status: false,
        message: 'Project not found.'
      })
    }
  })
}
