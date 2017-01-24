var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');
var Piece = require('./piece');

var options = { discriminatorKey: 'kind' };

var artistSchema = new mongoose.Schema({
  pieces: []
}, options);


var Artist = User.discriminator('Artist', artistSchema);

module.exports = Artist;
