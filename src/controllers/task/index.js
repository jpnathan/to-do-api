const create = require('./create');
const select = require('./select');
const update = require('./update');
const deleteTask = require('./delete');

module.exports = {
  createTask: create,
  selectTask: select,
  updateTask: update,
  deleteTask: deleteTask
};
