var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');

var options = { discriminatorKey: 'kind' };

var Artist = User.discriminator('Artist', new mongoose.Schema({
}, options));

module.exports = Artist;
