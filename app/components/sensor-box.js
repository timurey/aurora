import Ember from 'ember';

export default Ember.Component.extend({
    isLoading: false,
    success: '',
    error: null,
    actions: {
        deleteParameter: function(parameter){
            this.sendAction('deleteParameter', parameter);
        },
        addParameter: function(parameter){
            this.sendAction('addParameter', parameter);
        },
        cancel: function(id) {
            this.sendAction('cancel', id);
        },
        apply: function(id) {
            this.sendAction('apply', id);
        },
        applyAndSave: function(id) {
            this.sendAction('applyAndSave', id);
        },
        stopEvents: function() {
            // $('connectedSortable').sortable().destroy();
        }
    }
});
