import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return Ember.RSVP.hash({
            cpu: this.store.findRecord('cpu', 0),
            sensors: this.store.findRecord('sensors',0)
        });
    }
      
    //   afterModel(model) {
    //   console.log(model); // 0
    // }

});