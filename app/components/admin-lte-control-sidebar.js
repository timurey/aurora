import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },
    afterRenderEvent: function() {
    	$.AdminLTE.controlSidebar.activate();
    }
});


