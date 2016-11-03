import DS from 'ember-data';

export default DS.Model.extend({
  size: DS.attr('string'),
  uploadUrl: DS.attr('string'),
});
