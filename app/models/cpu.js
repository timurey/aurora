import DS from 'ember-data';

export default DS.Model.extend({
    load: DS.attr('number'),
    clock: DS.attr('number'),
    temperature: DS.attr('number'),
    total: DS.attr('number'),
    heap: DS.attr('number'),
    free: DS.attr('number'),
    usage: DS.attr('number'),
    uid: DS.attr('string'),
    didLoad: function() {
        var self = this;
        setInterval(function() { self.reload(); }, 5 * 1000); //every 5 minutes
    }
});