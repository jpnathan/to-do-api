'use strict'

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../../models');
const { omit } = require('lodash');

module.exports = (request, callback) => {
  const { body } = request;
  validateParams(body)
    .then(() =>
      getUserFromDataBase(body)
        .then(user =>
          validatePassword(user, request)
            .then(result => callback(null, {status: true, result: result}))
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

function validatePassword(userInfo, request) {
  return new Promise(async (resolve, reject) => {
    if (!userInfo) {
      reject({
        status: false,
        message: 'User not found.'
      })
    }

    const match = bcrypt.compare(userInfo.password, request.body.password)
      .then(value => console.log(value))
      .catch(error => console.log(error));
    if (match) {
      const token = jwt.sign(
        { id: userInfo.id },
        request.app.get('secretKey'),
        { expiresIn: '1h' }
      );

      return resolve({
        user: omit(userInfo, ['password', 'confirmPassword', '_id']),
        token: token
      });
    }

    return reject({
      status: false,
      message: 'Password is wrong.'
    })
  })
}
