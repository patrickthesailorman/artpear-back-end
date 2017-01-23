var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');

var Artist = User.discriminator('Artist', new mongoose.Schema({
  portfolio: [{ type: ObjectId, ref: 'Piece' }],
}));

module.exports = Artist;
