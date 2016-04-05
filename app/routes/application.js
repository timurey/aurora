import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            clock: this.store.findRecord('clock', 0),
            // sensors: this.store.findAll('sensors'),
            // restapi: this.store.findAll('restapi'),
        });
    }
});
