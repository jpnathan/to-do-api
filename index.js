const express = require('express');
const morgan = require('morgan');
const app = express();

const { config } = require('./src/config');
// const { jokenpo } = require('./src/routes');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader(
    'Access-Control-Allow-Headers',
    `Content-Type, Access-Control-Allow-Headers,
       Authorization, X-Requested-With`
  );
  next();
});

app.use(
  morgan('dev')
);

// API routes
// app.use();

app.listen(config().port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log(`Server runing on port ${config().port}`);
});
