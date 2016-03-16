import Ember from 'ember';
// import app
export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('test');
	}
});
