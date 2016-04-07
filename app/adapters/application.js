import DS from 'ember-data';
import Ember from 'ember';
var inflector = Ember.Inflector.inflector;

inflector.uncountable('restapi');
inflector.uncountable('cpu');
inflector.uncountable('ntp');
inflector.uncountable('clock');
inflector.uncountable('network');
inflector.uncountable('sensors');
inflector.uncountable('temperature');
inflector.uncountable('input');

export default DS.JSONAPIAdapter.extend({
    namespace: 'rest/v1',
    // host: 'http://stm32_1.local'

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
