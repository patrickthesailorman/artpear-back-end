var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');
var Piece = require('./piece');

var options = { discriminatorKey: 'kind' };

var artistSchema = new mongoose.Schema({
  pieces: []
}, options);

artistSchema.methods.populatePieces = function(lean = false, cb) {
  Piece
    .find({_artist: this._id})
    .lean(lean)
    .select('-_artist')
    .exec((err, pieces) => {
      if(err) console.error(err);
      this.pieces = pieces;
      return cb(this);
    });
};

var Artist = User.discriminator('Artist', artistSchema);

module.exports = Artist;
