import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('fourOhFour', { path: "*path"});
  this.route('system');
  this.route('sensors',  function() {
    this.route('add');
    this.route('show', {path: "/:sensor_id"});
    this.route('delete', {path: "/delete/:sensor_id"});
  });
});

export default Router;
