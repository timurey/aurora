import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    	this.model.clock = this.store.findAll('clock');
    	console.log(this.model.clock);
    	return (this.model);
    }
});
