const { project } = require('../../controllers');
const { Router } = require('express');

const route = Router();

route.post('/projects', (req, res) => {
  project.createProject(req.body, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.get('/projects/:id', (req, res) => {
  project.selectProject(req, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.get('/projects', (req, res) => {
  project.selectProject(req, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.delete('/projects/:id', (req, res) => {
  project.deleteProject(req.params, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

route.put('/projects/:id', (req, res) => {
  project.updateProject(req, (err, data) => {
    if (err) res.status(400).json(err);
    res.status(200).json(data)
  })
});

module.exports = route;
