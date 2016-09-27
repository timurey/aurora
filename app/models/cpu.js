import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    load: attr('number'),
    clock: attr('number'),
    temperature: attr('number'),
    total: attr('number'),
    heap: attr('number'),
    free: attr('number'),
    usage: attr('number'),
    uid: attr('string'),
    usage_percent: Ember.computed('usage', 'heap', function() {
        return Ember.String.htmlSafe(Math.floor(this.get('usage') / this.get('heap') * 100));

    }),
    // didLoad: function() {
    //     var self = this;
    //     setInterval(function() { self.reload(); }, 5 * 1000); //every 5 minutes
    // }
});