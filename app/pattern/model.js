import DS from 'ember-data';

export default DS.Model.extend({
  quiltSize: DS.attr('string'),
  patternImageUrl: DS.attr('string'),
  patternImage: DS.attr('file'),
});
