import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('albums');
  this.route('album', {
    path: ':album_id'
  });
});

export default Router;
