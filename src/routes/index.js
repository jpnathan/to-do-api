const user = require('./user');
const project = require('./project');
const task = require('./task');

module.exports = {
  user: () => {
    return user;
  },
  project: () => {
    return project;
  },
  task: () => {
    return task;
  }
};
