const { task } = require('../../controllers');
const { Router } = require('express');
const route = Router();

route.post('/tasks', (req, res) => {
  task.createTask(req.body, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.get('/tasks/:id', (req, res) => {
  task.selectTask(req.params, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.get('/tasks', (req, res) => {
  task.selectTask(req.params, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.delete('/tasks/:id', (req, res) => {
  task.deleteTask(req.params, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.put('/tasks/:id', (req, res) => {
  task.updateTask(req, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

module.exports = route;
