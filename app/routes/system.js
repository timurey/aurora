import Ember from 'ember';

export default Ember.Route.extend({
	model: function (){
		this.model.ntp = this.store.findAll('ntp');
    	this.model.clock = this.store.findAll('clock');
    	console.log('route ntp model :');
    	console.log(this.model.ntp);
    	return (this.model);
	},
	    actions: {
        cancel(item) {
        	const type = this.controllerFor(item)
        	console.log(type);
            item.rollbackAttributes();
        }
    }
});
