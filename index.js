var _ = require('lodash');
var express = require('express');
var morgan = require('morgan');

var albums = require('./albums');
var tracks = require('./tracks');

_.forEach(albums, function(album, id) {
  album.links = {
    tracks: '/api/albums/' + id + '/tracks'
  };
});

var app = express();
var router = express.Router();

router.get('/albums', function(req, res) {
  res.send({
    albums: _.values(albums)
  });
});
router.get('/albums/:id', function(req, res) {
  res.send({
    album: albums[req.params.id]
  });
});
router.get('/albums/:id/tracks', function(req, res) {
  res.send({
    tracks: tracks[req.params.id]
  });
});

function notFound(req, res) {
  res.status(404).send('<h2>Not found</h2>');
}

app.use(morgan('dev'));
app.use('/api', router);
app.use(notFound);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app running on port', app.get('port'));
});
