import DS from 'ember-data';

export default DS.Model.extend({
    'unixtime': DS.attr('number'),
    'localtime': DS.attr('string'),
    'time': DS.attr('string'),
    'date': DS.attr('string'),
    'timezone': DS.attr('string'),
    'date_and_time': Ember.computed('date', 'time', function() {
    return `${this.get('date')} ${this.get('time')}`;
  })

});
