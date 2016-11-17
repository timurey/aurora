import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            cpu: this.store.findRecord('cpu', 0),
            sensor: this.get('store').findAll('sensor')
        });
    }

});