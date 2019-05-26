const user = require('./user');
const project = require('./project');

module.exports = {
  user: () => {
    return user;
  },
  project: () => {
    return project;
  }
};
