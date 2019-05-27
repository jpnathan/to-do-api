const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');
const mongo = require('./src/config/mongo');
const app = express();

const { config } = require('./src/config');
const { user, project, task } = require('./src/routes');

app.use(
  morgan('dev'),
  bodyParse.urlencoded({extended: false}),
  bodyParse.json(),
  cors()
);

app.use(
  user(),
  project(),
  task()
);

app.listen(config().port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${config().port}`);
  mongo.connect();
});
