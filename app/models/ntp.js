import DS from 'ember-data';

export default DS.Model.extend({
    address0: DS.attr('string'),
    address1: DS.attr('string'),
    address2: DS.attr('string'),
    address3: DS.attr('string'),
    period: DS.attr('string'),
    needSave: DS.attr('boolean', { defaultValue: false }),
    enabled: DS.attr('boolean', { defaultValue: true }),

});