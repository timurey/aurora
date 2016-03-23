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
    loadedAt: function() {
        this.set('loadedAt', new Date());
    }.on('didLoad'),
    needSave: DS.attr('boolean', { defaultValue: false })

});