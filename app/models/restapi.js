import DS from 'ember-data';

export default DS.Model.extend({
    type: DS.attr(),
    links: DS.attr(),
});
