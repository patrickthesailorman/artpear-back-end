var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  organizationName: String,
  email: {
    type: String,
    require: true,
    unique: true
  },
  bio: String,
  photoUrl: String
});

module.exports = mongoose.model('User', User);
