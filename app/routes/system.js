import Ember from 'ember';

export default Ember.Route.extend({
	model: function (){
		this.model.ntp = this.store.findAll('ntp');
		this.model.ntp.meta = this.get.meta;
    	this.model.clock = this.store.findAll('clock');
    	// console.log(this.model);
    	return (this.model);
	}
});
