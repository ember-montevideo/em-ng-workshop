import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr('string'),
  name: DS.attr('string'),
  image: DS.attr('string')
});
