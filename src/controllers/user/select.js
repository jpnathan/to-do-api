'use strict'

const { User } = require('../../models');

module.exports = (params, callback) => {
  validateParams(params)
    .then(() =>
      getUserFromDataBase(params)
        .then(user =>
          validatePassword(user, params.password)
            .then((isValid) => callback(null, {status: true, result: isValid}))
            .catch((error) => callback(error, null)))
        .catch((error) => callback(error, null)))
    .catch((error) => callback(error, null))
};

function validateParams(params) {
  return new Promise((resolve, reject) => {
    const { email, password } = params;
    if (!email && !password) {
      return reject({
        status: false,
        message: 'Must provide parameters to select an user.'
      })
    }
    return resolve();
  })
}

function getUserFromDataBase(params) {
  return new Promise((resolve, reject) => {
    try {
      const { email } = params;
      User.findOne({email: email}).then(user => resolve(user))
    } catch (e) {
      reject({
        status: false,
        message: 'User not found.'
      })
    }
  })
}

function validatePassword(user, userPassword) {
  return new Promise((resolve, reject) => {
    const { password } = user;
    const isValid = password === userPassword;
    if (isValid) {
      resolve(isValid);
    }
    reject({
      status: false,
      message: 'Password is wrong.'
    })
  })
}
