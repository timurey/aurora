import DS from 'ember-data';

export default DS.Model.extend({
    useipv4: DS.attr('boolean'),
    usedhcp: DS.attr('boolean'),
    address: DS.attr('string'),
    netmask: DS.attr('string'),
    gateway: DS.attr('string'),
    primarydns: DS.attr('string'),
    secondarydns: DS.attr('string'),
    needSave: DS.attr('boolean', { defaultValue: false }),
});