'use strict'

const { User } = require('../../models');

const user = (params, callback) => {
  validateParams(params)
    .then(() => {
      saveUser(params)
        .then(user => callback(null, {status: true, result: user}))
        .catch(error =>  {console.log(error); return callback(error, null)})
    })
    .catch(error => callback(error, null))
};

function validateParams(params) {
  return new Promise((resolve, reject) => {
    const {email, password, confirmPassword} = params;
    if (!email && !password && !confirmPassword) {
      return reject({
        status: false,
        message: 'Must provide parameters to create new user.'
      })
    }
    
    if (!(password === confirmPassword)) {
      return reject({
        status: false,
        message: 'The passwords provided are different.'
      })
    }
    return resolve();
  })
}

function saveUser(params) {
  return new Promise((resolve, reject) => {
    try {
      const Model = new User(params);
      Model.save(params).then(user => resolve(user))
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = user;
