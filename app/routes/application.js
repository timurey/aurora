import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            clock: this.store.findRecord('clock', 0),

        });
    }
});