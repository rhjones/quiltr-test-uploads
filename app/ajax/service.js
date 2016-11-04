import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

import ENV from 'quiltr/config/environment';

export default AjaxService.extend({
  host: ENV.apiHost,
});