import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            clock: this.store.findRecord('clock', 0),
            cpu: this.store.findRecord('cpu', 0),
            restapi: this.store.findAll('restapi'),
        });
    }
    //   ,
    //   afterModel(model) {
    //   console.log(model); // 0
    // }

});