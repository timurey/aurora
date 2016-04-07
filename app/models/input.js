import DS from 'ember-data';

export default DS.Model.extend({
    sensor: DS.belongsTo('sensor', { async: true }),
    name: DS.attr('string'),
    place: DS.attr('string'),
    value: DS.attr(),
    type: DS.attr(),
    serial: DS.attr('string'),
    online: DS.attr('boolean')
});
