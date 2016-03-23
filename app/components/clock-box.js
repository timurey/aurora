import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        cancel: function() {
            this.sendAction('cancel');
        },
        apply: function() {
            this.sendAction('apply');
        },
        applyAndSave: function() {
            this.sendAction('applyAndSave');
        },
        sync: function() {
            this.sendAction('sync');
        },
        stopEvents: function() {
            // $('connectedSortable').sortable().destroy();
        }
    }
});