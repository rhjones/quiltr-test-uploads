import Ember from 'ember';

export default Ember.Component.extend({
  newPattern: {
  },
  actions: {
    createPattern () {
      let newPattern = new FormData(document.getElementById('new-pattern'));
      // let newPattern = this.get('newPattern');
      // newPattern.quiltSize = data.get('pattern[quiltSize]');
      // newPattern.upload = data.get('pattern[patternImage]');    
      console.log('newPattern is', newPattern);  
      this.sendAction('createPattern', newPattern);
      // clear input
      this.set('newPattern', null);
    }
  }
});
