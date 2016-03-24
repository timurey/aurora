import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    'unixtime': DS.attr('number'),
    'localtime': DS.attr('string'),
    'time': DS.attr('string'),
    'date': DS.attr('string'),
    'timezone': DS.attr('string'),
    'date_and_time': Ember.computed('date', 'time', function() {
        return `${this.get('date')} ${this.get('time')}`;

    }),
    needSave: DS.attr('boolean', { defaultValue: false }),
    didLoad: function() {
        var self = this;
        setInterval(function() { self.reload(); }, 1 * 1000); //every 1 seconds
    }

});