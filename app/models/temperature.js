import DS from 'ember-data';

export default DS.Model.extend({
    sensor: DS.belongsTo('sensor'),
    name: DS.attr('string'),
    place: DS.attr('string'),
    value: DS.attr('number'),
    online: DS.attr('boolean')
});
