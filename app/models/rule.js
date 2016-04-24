import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  expression: DS.attr(),
  execute: DS.attr()
});
