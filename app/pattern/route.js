import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('pattern');
  },

  uploads: Ember.inject.service(),
  actions: {
    createPattern (newPattern) {
      return this.get('uploads').saveUpload(newPattern, '/patterns')
      .then(console.log)
      // currently using two transitions to force a reload
      // can't transition from a route to itself
      // if I name my routes correctly (or have a separate route for upload vs. view all)
      // I won't have to do this
      .then(() => this.transitionTo('application'))
      .then(() => this.transitionTo('pattern'))
      .catch(() => {
        console.log('Doom inside of pattern/route pointing to uploads service');
      })
    },
  }
});
