import DS from 'ember-data';

export default DS.RESTSerializer.extend({
	normalizeFindRecordResponse(store, type, payload) {
    return {
    	data: {
    		id: 0,
    		type: type.modelName,
    		attributes:{
    			load: payload.cpu.load,
    			clock: payload.cpu.clock,
    			temperature: payload.cpu.temperature,
    			total: payload.memory.total,
    			heap: payload.memory.heap,
    			free: payload.memory.free,
    			usage: payload.memory.usage,
    			uid: payload.uid
    		}
    	}
    };
  }
});
