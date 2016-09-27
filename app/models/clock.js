import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    'unixtime': attr('number'),
    'localtime': attr('string'),
    'time': attr('string'),
    'date': attr('string'),
    'timezone': attr('string'),
    'date_and_time': Ember.computed('date', 'time', function() {
        return `${this.get('date')} ${this.get('time')}`;

    }),
    needSave: attr('boolean', { defaultValue: false }),
    // didLoad: function() {
    //     var self = this;
    //     setInterval(function() { self.reload(); }, 1 * 1000); //every 1 seconds
    // }

});