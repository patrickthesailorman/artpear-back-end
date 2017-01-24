var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var pieceSchema = new Schema({
  _artist : { type: ObjectId, ref: 'Artist' },
  title: {
    type: String,
    required: true
  },
  description: String,
  photoUrl: String
});

module.exports = pieceSchema;
