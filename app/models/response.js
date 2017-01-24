var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;


var responseSchema = new Schema({
  opportunity: {
    type: ObjectId,
    ref: 'Opportunity',
    required: true
  },
  artist: {
    type: ObjectId,
    ref: 'Artist',
    required: true
  },
   message: String
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

module.exports = mongoose.model('Response', responseSchema);
