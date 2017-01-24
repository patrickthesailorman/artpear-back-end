var mongoose  = require('./connection');

var User = require('../app/models/user');
var Artist = require('../app/models/artist');
var Piece = require('../app/models/piece');

var artistSeed = {
  firstName: 'Hector',
  lastName: 'Suave',
  organizationName: "Hector's Creations",
  email: 'hector.s@example.com',
  bio: "I'm a local aritst with a lot of great ideas.",
  photoUrl: 'http://i.imgur.com/dqycl3D.png'
};

var pieceSeed = {
  title: 'War and Peace',
  description: "It's existential and relevant: a tour de force.",
  photoUrl: 'http://i.imgur.com/Nhm7kTX.jpg'
};

User.remove({kind: 'Artist'}).then(() => {
  Piece.remove({}).then(() => {
    var artist = new Artist(artistSeed);
    artist.save((err) => {
      if(err) console.error(err);

      pieceSeed._artist = artist._id;
      var piece = new Piece(pieceSeed);

      piece.save((err) => {
        if(err) console.error(err);

        console.log('\nArtist:\n', artist);
        artist.findPieces((err, pieces) => {
          console.log('\nPieces:\n', pieces);
          process.exit();
        });
      });
    });
  });
});
