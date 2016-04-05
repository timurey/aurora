import DS from 'ember-data';
import Ember from 'ember';
var inflector = Ember.Inflector.inflector;

inflector.uncountable('restapi');
inflector.uncountable('cpu');
inflector.uncountable('ntp');
inflector.uncountable('clock');
inflector.uncountable('network');
inflector.uncountable('temperature');
inflector.uncountable('sensors');

// export default DS.RESTAdapter.extend({
//   namespace: 'rest/v1',
//   // host: 'http://stm32_1.local'
// });
export default DS.JSONAPIAdapter.extend({
  namespace: 'rest/v1',
  // host: 'http://stm32_1.local'
});