var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');
var Piece = require('./piece');

var options = { discriminatorKey: 'kind' };

var artistSchema = new mongoose.Schema({}, options);

artistSchema.methods.findPieces = function(cb) {
  return Piece.find({_artist: this._id}, cb);
};

var Artist = User.discriminator('Artist', artistSchema);

module.exports = Artist;
