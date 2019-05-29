const create = require('./create');
const auth = require('./auth');

module.exports = {
  createUser: create,
  authenticate: auth
};
