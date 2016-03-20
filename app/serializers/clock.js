import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeFindAllResponse(store, type, payload) {
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
    }
});