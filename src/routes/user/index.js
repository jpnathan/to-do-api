const { user } = require('../../controllers');
const { Router } = require('express');
const route = Router();

route.post('/users', (req, res) => {
  user.createUser(req.body, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.post('/auth', (req, res) => {
  user.authenticate(req, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

module.exports = route;

