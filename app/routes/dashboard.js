import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            cpu: this.store.findRecord('cpu', 0),
            // temperature: this.store.findAll('temperature')
        });
    }
    //   ,
    //   afterModel(model) {
    //   console.log(model); // 0
    // }

});