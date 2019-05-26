const { createUser, selectUser } = require('./user');
const {
  createProject,
  selectProject,
  deleteProject,
  updateProject
} = require('./project');

module.exports = {
  user: {
    createUser: createUser,
    selectUser: selectUser
  },
  project: {
    createProject: createProject,
    selectProject: selectProject,
    deleteProject: deleteProject,
    updateProject: updateProject
  }
};
