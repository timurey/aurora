import Ember from 'ember';
// import app
export default Ember.Route.extend({
	    model() {
        return Ember.RSVP.hash({
            test: this.store.findAll('test'),
        });
    }
});
