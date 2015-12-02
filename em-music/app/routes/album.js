import Ember from 'ember';

export default Ember.Route.extend({
  player: Ember.inject.service(),

  actions: {
    trackClicked(track) {
      this.get('player').play(track);
    }
  }
});
