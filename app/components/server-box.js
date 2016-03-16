import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },

    afterRenderEvent: function() {
        $(".connectedSortable").sortable({
            placeholder: "sort-highlight",
            connectWith: ".connectedSortable",
            handle: ".box-header, .nav-tabs",
            forcePlaceholderSize: true,
            zIndex: 999999
        });
        $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");

    },
    willDestroyElement() {
        // $('connectedSortable').sortable().destroy();
    },
    actions: {
        // stopEvents: function() {
        //     $('connectedSortable').sortable().destroy();
        // }
    }
});
