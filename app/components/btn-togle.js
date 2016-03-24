import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },

    afterRenderEvent: function() {
  /*
   * INITIALIZE BUTTON TOGGLE
   * ------------------------
   */
  Ember.$('.btn-group[data-toggle="btn-toggle"]').each(function () {
    var group = Ember.$(this);
    Ember.$(this).find(".btn").on('click', function (e) {
      group.find(".btn.active").removeClass("active");
      Ember.$(this).addClass("active");
      e.preventDefault();
    });

  });

    },
    willDestroyElement() {
        // $('connectedSortable').sortable().destroy();
    },
    actions: {
    	enableAct:function(){
    		this.set('enable', true);
    		console.log('enable');
    	},
    	disableAct:function(){
    		this.set('enable', false);
    		console.log('disable');
    	}
    }
});
