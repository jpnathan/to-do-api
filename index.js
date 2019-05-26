const express = require('express');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');
const app = express();

const { config } = require('./src/config');
const mongo = require('./src/config/mongo');
const { user } = require('./src/routes');

app.use(
  morgan('dev'),
  bodyParse.urlencoded({extended: false}),
  bodyParse.json(),
  cors()
);

app.use(
  user()
);

app.listen(config().port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port ${config().port}`);
  mongo.connect();
});
