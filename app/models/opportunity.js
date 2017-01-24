var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;



var opportunitySchema = new Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    seeker: {
      type: ObjectId,
      ref: 'Seeker',
      required: true
    },
    photoUrl: String,
});



module.exports = mongoose.model('Opportunity', opportunitySchema);
