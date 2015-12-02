import Ember from 'ember';

export default Ember.Service.extend({
  play(track) {
    var message = `▶︎ Now playing ${track.get('title')}...`;
    window.alert(message);
    document.title = message;
  }
});
