var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var artistsRouter = require('./app/routers/artists');
var seekersRouter = require('./app/routers/seekers');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiPrefix = '/api';

app.use(`${apiPrefix}/artists`, artistsRouter);
app.use(`${apiPrefix}/seekers`, seekersRouter);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
