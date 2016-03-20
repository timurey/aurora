import Ember from 'ember';
import DS from 'ember-data';
String.prototype.toHHMMSS = function() {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}

export default Ember.Component.extend({
    didInsertElement: function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
    },

    afterRenderEvent: function() {
        $(".timepicker").timepicker({

            showInputs: false,
            icons: {
                up: 'fa fa-angle-up',
                down: 'fa fa-angle-down'
            },
            showMeridian: false,
            defaultTime: false,
            maxHours: 49,
            snapToStep: true

        });
        // let model = DS.store.findAll('ntp');;

        let period = '3601';
        console.log('period :' + period + ' , HHMMSS :' + period.toHHMMSS())
        $('#timepicker').timepicker('setTime', period.toHHMMSS());
    },
    willDestroyElement() {
        // $('connectedSortable').sortable().destroy();
    },
    actions: {
        cancel: function() {
            this.sendAction('cancel', this.get('ntp'));
        },

        stopEvents: function() {
            // $('connectedSortable').sortable().destroy();
        }
    }
});