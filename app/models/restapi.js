import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    links: DS.attr(),
    read: DS.attr(),
    create: DS.attr(),
    update: DS.attr(),
    delete: DS.attr()

});
