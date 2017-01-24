var express = require('express');
var app = express();
var artistsRouter = require('./app/routers/artists');
var port = process.env.PORT || 8080;

var apiPrefix = '/api';

app.use(`${apiPrefix}/artists`, artistsRouter);

app.listen(port, () => {
  console.log(`Listening on :${port}`);
});
