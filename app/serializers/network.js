import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeFindRecordResponse(store, type, payload) {
        return {
            'data': {
                'type': 'network',
                'id': 0,
                'attributes': {
                    'useipv4': payload.ipv4.useipv4,
                    'usedhcp': payload.ipv4.usedhcp,
                    'address': payload.ipv4.address,
                    'netmask': payload.ipv4.netmask,
                    'gateway': payload.ipv4.gateway,
                    'primarydns': payload.ipv4.primarydns,
                    'secondarydns': payload.ipv4.secondarydns
                }
            }

        };
    },
    serialize(snapshot, options) {
        var answer = {};
        var json = this._super(...arguments);
        console.log('json :', json);
        answer.ipv4 = {};
        answer.ipv4.useipv4 = json.useipv4;
        answer.ipv4.usedhcp = json.usedhcp;
        answer.ipv4.address = json.address;
        answer.ipv4.netmask = json.netmask;
        answer.ipv4.gateway = json.gateway;
        answer.ipv4.primarydns = json.primarydns;
        answer.ipv4.secondarydns = json.secondarydns;
        answer.needSave = json.needSave;
        console.log('answer :', answer);

        return JSON.stringify(answer);
    }
});