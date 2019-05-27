const userModel = require('./user/index');
const projectModel = require('./project/index');
const taskModel = require('./task/index')

module.exports = {
  User: userModel,
  Project: projectModel,
  Task: taskModel
};
