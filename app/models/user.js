var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;

var User = new Schema({
  firstName: String,
  lastName: String,
  email: { //functions as unique username
    type: String,
    unique: true
  },
  bio: String,
  photoUrl: String
});

module.exports = mongoose.model('User', User);
