var mongoose = require('../../db/connection');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var User = require('./user');
var Piece = require('./piece');

var options = { discriminatorKey: 'kind' };

var seekerSchema = new mongoose.Schema({

}, options);

var Seeker = User.discriminator('Seeker', seekerSchema);

module.exports = Seeker;
