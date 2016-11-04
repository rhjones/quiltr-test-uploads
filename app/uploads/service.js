import Ember from 'ember';

import ENV from 'quiltr/config/environment';

export default Ember.Service.extend({
  host: ENV.apiHost,
  ajax: Ember.inject.service(),

  saveUpload (data, endpoint) {
    console.log('inside of uploads/service.saveUpload');
    console.log('data is', data);
    console.log('endpoint is', endpoint);
    return this.get('ajax').post(endpoint, {
      data,
      contentType: false,
      processData: false,
    });
  },
});
