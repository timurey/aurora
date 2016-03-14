import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    	var cpu = this.store.findAll('cpu');
    	return cpu;
    }

  //   ,
  //   afterModel(model) {
  //   console.log(model); // 0
  // }

});
