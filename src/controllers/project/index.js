const create = require('./create');
const select = require('./select');
const update = require('./update');
const deleteProject = require('./delete');

module.exports = {
  createProject: create,
  selectProject: select,
  updateProject: update,
  deleteProject: deleteProject
};
