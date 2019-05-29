const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');
const mongo = require('./src/config/mongo');
const jwtConfig = require('./src/config/jwt');
const middleware = require('./src/routes/middleware');
const app = express();

const { config } = require('./src/config');
const { user, project, task } = require('./src/routes');

app.set('secretKey', jwtConfig.secretKey);

app.use(
  morgan('dev'),
  bodyParse.urlencoded({extended: false}),
  bodyParse.json(),
  cors()
);

app.use(
  user(),
  middleware,
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
