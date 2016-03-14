import Ember from 'ember';
// import app
export default Ember.Route.extend({
  model() {
    return this.store.findAll('test');
  }
});
