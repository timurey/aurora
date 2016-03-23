import DS from 'ember-data';

function toHHMMSS(period) {
    var sec_num = parseInt(period, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}

function fromHHMMSS(str) {
    let a =str.split(':');
    let m=1, seconds =0;
    console.log('a :'+a); 
    while (a.lenght>0){
        seconds+=m*parseInt(a.pop(), 10);
        m*=60;
    }
    if (a[2])
    {
        seconds+=parseInt(a[2]);
    }
        if (a[1])
    {
        seconds+=parseInt(a[1])*60;
    }
            if (a[0])
    {
        seconds+=parseInt(a[0])*60*60;
    }

    return seconds;
}

export default DS.RESTSerializer.extend({
    normalizeFindRecordResponse(store, type, payload) {
        console.log("ntp payload :", payload);
        return {
            'data': {
                'id': 0,
                'type': 'ntp',
                'attributes': {
                    'address0': payload.servers[0],
                    'address1': payload.servers[1],
                    'address2': payload.servers[2],
                    'address3': payload.servers[3],
                    'period': toHHMMSS(payload.period),
                    'enabled': payload.enabled
                }

            }
        };
    },
    serialize(snapshot, options) {
        var answer = {};
        var json = this._super(...arguments);
        console.log('json :', json);
        answer.servers = [json.address0, json.address1, json.address2, json.address3];
        answer.period = fromHHMMSS(json.period);
        answer.needSave = json.needSave;
        answer.enabled = json.enabled;
        console.log('answer :', answer);


        return JSON.stringify(answer);
    }
});