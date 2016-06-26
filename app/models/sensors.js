import DS from 'ember-data';

const { belongsTo,attr, hasMany } = DS;

export default DS.Model.extend({
	// name: DS.attr(),
    temperature: DS.hasMany('temperature', {async:true}),
    inputs: DS.hasMany('input', {async:true}),
    // didLoad: function() {
    //     var self = this;
    //     setInterval(function() { self.hasMany('temperature').reload(); }, 5 * 1000); //every 5 minutes
    // }
});
