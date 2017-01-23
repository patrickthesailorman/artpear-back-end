var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: String, //required
  lastName: String, //required
  organizationName: String, //optional
  email: { //required, unique
    type: String,
    unique: true
  },
  bio: String, //optional
  photoUrl: String //optional
});

module.exports = mongoose.model('User', User);
