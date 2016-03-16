import DS from 'ember-data';
import Ember from 'ember';
var inflector = Ember.Inflector.inflector;

inflector.uncountable('restapi');
inflector.uncountable('cpu');
inflector.uncountable('ntp');

export default DS.RESTAdapter.extend({
  namespace: 'rest/v1',
  // host: 'http://stm32_1.local'
});
export default DS.JSONAPIAdapter.extend({
  namespace: 'rest/v1',
  // host: 'http://stm32_1.local'
});