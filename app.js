var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var artistsRouter = require('./app/routers/artists');
var opportunitiesRouter = require('./app/routers/opportunities');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var apiPrefix = '/api';

app.use(`${apiPrefix}/artists`, artistsRouter);
app.use(`${apiPrefix}/opportunities`, opportunitiesRouter);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
