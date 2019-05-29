'use strict'

const { Router } = require('express');
const jwt = require('jsonwebtoken');

const route = Router();

route.use((req, res, next) => {
  jwt.verify(
    req.headers['authorization'],
    req.app.get('secretKey'),
    function(err, decoded) {
      if (err) {
        return res.json({ status:"error", message: err.message });
      }
      req.body.userId = decoded.id;
      next();
    });
});

module.exports = route;
