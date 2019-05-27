const { createUser, selectUser } = require('./user');
const {
  createProject,
  selectProject,
  deleteProject,
  updateProject
} = require('./project');
const {
  createTask,
  selectTask,
  updateTask,
  deleteTask
} = require('./task');

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
  },
  task: {
    createTask: createTask,
    selectTask: selectTask,
    updateTask: updateTask,
    deleteTask: deleteTask
  }
};
