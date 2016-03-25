import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            clock: this.store.findRecord('clock', 0),
            ntp: this.store.findRecord('ntp', 0)
        });
    },

    actions: {
        cancelNtpCanges() {
            this.controller.get('model.ntp').rollbackAttributes();
        },
        applyNtpCanges() {
            console.log('apply:');
            let answer = this.store.peekRecord('ntp', 0);
            answer.set('needSave', false);
            this.controller.get('model.ntp').save();
        },
        applyAndSaveNtpCanges() {
            console.log('apply and save:');
            let answer = this.store.peekRecord('ntp', 0);
            answer.set('needSave', true);
            this.controller.get('model.ntp').save();
        },
        updateNptPeriod(value) {
            console.log('changed period:');
            let answer = this.store.peekRecord('ntp', 0);
            answer.set('period', value.time.value);
        },

        cancelClockCanges() {
            this.controller.get('model.clock').rollbackAttributes();
        },
        applyClockCanges() {
            console.log('apply:');
            let answer = this.store.peekRecord('clock', 0);
            answer.set('needSave', false);
            this.controller.get('model.clock').save();
        },
        applyAndSaveClockCanges() {
            console.log('apply and save:');
            let answer = this.store.peekRecord('clock', 0);
            answer.set('needSave', true);
            this.controller.get('model.clock').save();
        },
        syncClock() {
            let unixtime = Math.floor(Date.now() / 1000);
            console.log('sync unixtime :' + unixtime);

            let str = new Date().toString();
            console.log('sync string :' + str);
            let re = /GMT.+$/;
            let timezone = str.match(re);
            console.log('sync timezone :' + timezone);

            let answer = this.store.peekRecord('clock', 0);
            answer.set('unixtime', unixtime);
            answer.set('timezone', timezone);
            this.controller.get('model.clock').save();
        },

    }
});