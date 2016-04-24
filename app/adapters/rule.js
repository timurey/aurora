
import ApplicationAdapter from './application';
import Ember from 'ember';
import DS from 'ember-data';

export default ApplicationAdapter.extend({
  namespace: 'rest/v2',
  // host: 'http://stm32_1.local'
  // findRecord: function(store, type, id, snapshot) {
  //       var url = [this.namespace, type.modelName].join('/');
  //       return new Ember.RSVP.Promise(function(resolve, reject) {
  //           Ember.$.getJSON(url).then(function(data) {
  //               Ember.run(null, resolve, data);
  //           }, function(jqXHR) {
  //               jqXHR.then = null; // tame jQuery's ill mannered promises
  //               Ember.run(null, reject, jqXHR);
  //           });
  //       });
  //   },


});
