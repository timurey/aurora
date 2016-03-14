import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('boxes');
  this.route('dashboard');
  this.route('test');
  this.route('fourOhFour', { path: "*path"});
});

export default Router;
