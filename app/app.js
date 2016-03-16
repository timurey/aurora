import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import DS from 'ember-data';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});


// Aurora = Ember.Application.create();
loadInitializers(App, config.modulePrefix);

// App.restapi = DS.Model.extend({
//     type: DS.attr('string'),
//     links: DS.attr('string'),
//     getMethod: DS.attr('boolean'),
//     postMethod: DS.attr('boolean'),
//     putMethod: DS.attr('boolean'),
//     deleteMethod: DS.attr('boolean'),

// });

// App.restapi = App.store.findAll('restapi');
// console.log(App);

export default App;
