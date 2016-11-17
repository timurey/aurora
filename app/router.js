import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('fourOhFour', { path: "*path"});
  this.route('system');
  this.route('sensors');
  this.route('sensor', {path: "/sensors/:sensor_id"});
});

export default Router;
