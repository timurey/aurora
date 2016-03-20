import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeFindAllResponse(store, type, payload) {
        console.log("NTP payload :");
        console.log(payload);

        let answer = {};
        answer.data = [];
        for (var i=0; i<4; i++) {
            answer.data[i] = {type: "ntp", id: i, attributes: { address: payload.ntp_servers[i] } };
        };
        answer.meta = {};
        answer.meta.period = payload.period;
        console.log("NTP serialized answer :");
        console.log(answer);

        return answer;
        // {
        //  data: {
        //      id: payload.uid,
        //      type: type.modelName,
        //      attributes:{
        //          load: payload.cpu.load,
        //          clock: payload.cpu.clock,
        //          temperature: payload.cpu.temperature,
        //          total: payload.memory.total,
        //          heap: payload.memory.heap,
        //          free: payload.memory.free,
        //          usage: payload.memory.usage,
        //          uid: payload.uid
        //      }
        //  }
        // };
    }
});