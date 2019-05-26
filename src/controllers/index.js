const { createUser, selectUser } = require('./user');

module.exports = {
  user: {
    createUser: createUser,
    selectUser: selectUser
  }
};
