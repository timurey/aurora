import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },

    afterRenderEvent: function() {
        var value = this;

        Ember.$(".timepicker").timepicker({

            showInputs: false,
            icons: {
                up: 'fa fa-angle-up',
                down: 'fa fa-angle-down'
            },
            showMeridian: false,
            defaultTime: false,
            maxHours: 49,
            snapToStep: true,
            disableFocus: true
        });

        // let period = ntp.period;
        // console.log('period :' + period + ' , HHMMSS :' + period.toHHMMSS())
        Ember.$('#timepicker').timepicker();
        Ember.$('#timepicker').timepicker().on('changeTime.timepicker', function(e) {
            value.sendAction('updatePeriod', e);

        });

    },
    willDestroyElement() {
        // $('connectedSortable').sortable().destroy();
    },
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

        stopEvents: function() {
            // $('connectedSortable').sortable().destroy();
        }
    }
});