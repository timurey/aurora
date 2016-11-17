import Ember from 'ember';
import DS from 'ember-data';
import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    namespace: 'rest/v1',
    // host: 'http://stm32_1.local'
    findRecord: function(store, type, id, snapshot) {
        var url = [this.namespace, type.modelName].join('/');
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(url).then(function(data) {
                Ember.run(null, resolve, data);
            }, function(jqXHR) {
                jqXHR.then = null; // tame jQuery's ill mannered promises
                Ember.run(null, reject, jqXHR);
            });
        });
    },
    updateRecord: function(store, type, snapshot) {
        var data = this.serialize(snapshot, { includeId: true });
        var id = snapshot.id;
        var url = [this.namespace, type.modelName].join('/');

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                type: 'PUT',
                url: url,
                dataType: 'json',
                data: data
            }).then(function(data) {
                Ember.run(null, resolve, data);
            }, function(jqXHR) {
                jqXHR.then = null; // tame jQuery's ill mannered promises
                Ember.run(null, reject, jqXHR);
            });
        });
    }

});
