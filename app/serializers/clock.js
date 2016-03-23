import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeFindRecordResponse(store, type, payload) {
        return {
            'data': {
                'type': 'clock',
                'id': 0,
                'attributes': {
                    'unixtime': payload.clock.unixtime,
                    'localtime': payload.clock.localtime,
                    'time': payload.clock.time,
                    'date': payload.clock.date,
                    'timezone': payload.clock.timezone
                }
            }

        };
    },
      serialize(snapshot, options) {
        var answer = {};
        var json = this._super(...arguments);
        console.log('json :', json);
        answer.unixtime = json.unixtime;
        answer.timezone = json.timezone;
        answer.needSave = json.needSave;
        console.log('answer :', answer);

        return JSON.stringify(answer);
    }
});