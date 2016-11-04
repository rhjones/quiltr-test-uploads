import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('pattern');
  },

  uploads: Ember.inject.service(),
  actions: {
    createPattern (newPattern) {
      return this.get('uploads').saveUpload(newPattern, '/patterns')
      // how do I tell Ember to re-get all of the patterns here?
      .then(console.log)
      .catch(() => {
        console.log('Doom inside of pattern/route pointing to uploads service');
      })
    },
  }
});
