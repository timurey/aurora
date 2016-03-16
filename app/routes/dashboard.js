import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    	this.model.cpu = this.store.findAll('cpu');
    	this.model.restapi = this.store.findAll('restapi');
    	// console.log(this.model);
    	return (this.model);
    	
    }

  //   ,
  //   afterModel(model) {
  //   console.log(model); // 0
  // }

});
