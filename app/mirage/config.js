export default function() {
    this.get('/rest/v1/restapi', function() {
        return {
            'data': [{
                'type': 'restapi',
                'id': 1,
                'attributes': {
                    'type': 'clock',
                    'links': {
                        'self': '/rest/v1/clock'
                    }
                }
            }, {
                'type': 'restapi',
                'id': 2,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/cpu'
                    },
                    'type': 'cpu',
                }
            }, {
                'type': 'restapi',
                'id': 3,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/executors'
                    },
                    'type': 'executors',

                }
            }, {
                'type': 'restapi',
                'id': 4,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/onewire'
                    },
                    'type': 'onewire',
                }
            }, {
                'type': 'restapi',
                'id': 5,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/restapi'
                    },
                    'type': 'restapi',
                }
            }, {
                'type': 'restapi',
                'id': 6,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/test'
                    },
                    'type': 'test_rest',
                }
            }, {
                'type': 'restapi',
                'id': 7,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/sensors'
                    },
                    'type': 'sensors',
                }
            }, {
                'type': 'restapi',
                'id': 8,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/variables'
                    },
                    'type': 'variables',
                }
            }, {
                'type': 'restapi',
                'id': 9,
                'attributes': {
                    'links': {
                        'self': '/rest/v1/ntp'
                    },
                    'type': 'ntp',
                }
            }]
        }

        ;
    });

    this.get('/rest/v1/cpu', function() {
        return {

            'cpu': { 'load': 10, 'clock': 120000000, 'temperature': 38 },
            'memory': { 'total': 131072, 'heap': 65536, 'free': 23152, 'usage': 42384 },
            'uid': '00:42:00:42:30:34:51:0D:31:32:39:32'

        };
    });
    this.get('/rest/v1/tests', function() {
        let tests = [{
            type: 'test',
            id: 1,
            attributes: {
                test: 'test1'
            }
        }, {
            type: 'test',
            id: 2,
            attributes: {
                test: 'test2'
            }
        }];
        return { data: tests };
    });
    this.get('/rest/v1/ntp', function() {
        let ntps = { "servers": ["1.ru.pool.ntp.org", "2.ru.pool.ntp.org", "3.ru.pool.ntp.org", ""], "timezone": "GMT+0500 (YEKT)", "period": 3600, "enabled": true };
        // let ntps = {'data':[{'type':'ntp','id':0,'attributes':{'address':'1.ru.pool.ntp.org'}},{'type':'ntp','id':1,'attributes':{'address':'2.ru.pool.ntp.org'}},{'type':'ntp','id':2,'attributes':{'address':'3.ru.pool.ntp.org'}}],'meta':{'period':3600,'timezone':'GMT+0500 (YEKT)'}};
        return ntps;
    });
    this.get('/rest/v1/clock', function() {
        // let clock = {'data':{'type':'clock', 'id':0,'attributes':{'unixtime':1458150371,'localtime':'Wed Mar 16 2016 17:46:11 GMT+0500 (YEKT)','time':'17:46:11','date':'2016.03.16','timezone':'GMT+0500 (YEKT)'}}};
        let clock = { "clock": { "unixtime": 1458149124, "localtime": "Wed Mar 16 2016 17:25:24 GMT+0500 (YEKT)", "time": "17:25:24", "date": "2016.03.16", "timezone": "GMT+0500 (YEKT)" } };
        return clock;
    });
    this.get('/rest/v1/network', function() {
        let network = { "ipv4": { "useipv4": true, "usedhcp": true, "address": "192.168.2.15", "netmask": "255.255.255.0", "gateway": "192.168.2.1", "primarydns": "192.168.2.1", "secondarydns": "0.0.0.0" } };
        return network;
    });
    this.get('/rest/v2/sensors', function() {
        let sensors = {
            "data": {
                "type": "sensors",
                "id": 0,
                // "attributes": {
                //     // "id": 0,
                //     // "name": "sensors"
                // },
                "relationships": {
                    "temperature": {
                        "links": {
                            "related": "/rest/v2/sensors/temperature"
                        }
                    },
                    "inputs": {
                        "links": {
                            "related": "/rest/v2/sensors/inputs"
                        }
                    }
                }
            }

        };
        return sensors;
    });
    this.get('/rest/v1/sensors/temperature', function() {
        let temperature = { "temperature": [{ "id": 0, "name": "Температура воздуха", "place": "room", "value": "26.7", "serial": "28:3A:CF:7B:04:00:00:D3", "health": 100, "online": true }, { "id": 1, "name": "air", "place": "kitchen", "value": "0.0", "serial": "10:86:85:9E:02:08:00:77", "health": 0, "online": false }, { "id": 2, "name": "hot water", "place": "bath room", "value": "0.0", "serial": "28:A7:74:7C:04:00:00:91", "health": 0, "online": false }] };
        return temperature;
    });
    this.get('/rest/v2/sensors/temperature', function() {
        let temperature = { "data": [{ "type": "temperature", "id": 0, "attributes": { "name": "Температура воздуха", "place": "room", "value": "24.0", "serial": "28:3A:CF:7B:04:00:00:D3", "health": 100, "online": true } }, { "type": "temperature", "id": 1, "attributes": { "name": "air", "place": "kitchen", "value": "0.0", "serial": "10:86:85:9E:02:08:00:77", "health": 92, "online": false } }, { "type": "temperature", "id": 2, "attributes": { "name": "hot water", "place": "bath room", "value": "0.0", "serial": "28:A7:74:7C:04:00:00:91", "health": 92, "online": false } }] };
        return temperature;
    });
    this.get('/rest/v2/sensors/inputs', function() {
        let inputs = { "data": [{ "type": "inputs", "id": 0, "attributes": { "name": "bath is full", "place": "bath", "type": "digital", "value": false, "serial": "34:51:0D:31:32:39:32:05", "online": true } }, { "type": "inputs", "id": 1, "attributes": { "name": "door is opened", "place": "room", "type": "sequential", "value": "0x00", "serial": "34:51:0D:31:32:39:32:06", "online": true } }, { "type": "inputs", "id": 2, "attributes": { "name": "light dimmer", "place": "bedroom", "type": "dimmer", "value": 0, "serial": "34:51:0D:31:32:39:32:04", "online": true } }, { "type": "inputs", "id": 3, "attributes": { "name": "water level", "place": "bath", "type": "analog", "value": 1219, "serial": "34:51:0D:31:32:39:32:00", "online": true } }] };
        return inputs;
    });
        this.get('/rest/v2/rules', function() {
        let rules = { "data": [{ "type": "rule", "id": 0, "attributes": { "name": "bath is full", "expression" : "a1+1", "executer" : "a1"} }, { "type": "rule", "id": 1, "attributes": { "name": "tada", "expression" : "a1+1", "executer" : "a1"} }]};
        return rules;
    });
    this.get('/rest/v1/sensors/inputs', function() {
        let inputs = { "inputs": [{ "id": 0, "name": "bath is full", "place": "bath", "type": "digital", "value": false, "serial": "34:51:0D:31:32:39:32:05", "online": true }, { "id": 1, "name": "door is opened", "place": "room", "type": "sequential", "value": "0x00", "serial": "34:51:0D:31:32:39:32:06", "online": true }, { "id": 2, "name": "light dimmer", "place": "bedroom", "type": "dimmer", "value": 0, "serial": "34:51:0D:31:32:39:32:04", "online": true }, { "id": 3, "name": "water level", "place": "bath", "type": "analog", "value": 1225, "serial": "34:51:0D:31:32:39:32:00", "online": true }] };
        return inputs;
    });
    /*
      Config (with defaults).

      Note: these only affect routes defined *after* them!
    */
    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Route shorthand cheatsheet
    */
    /*
      GET shorthands

      // Collections
      this.get('/contacts');
      this.get('/contacts', 'users');
      this.get('/contacts', ['contacts', 'addresses']);

      // Single objects
      this.get('/contacts/:id');
      this.get('/contacts/:id', 'user');
      this.get('/contacts/:id', ['contact', 'addresses']);
    */

    /*
      POST shorthands

      this.post('/contacts');
      this.post('/contacts', 'user'); // specify the type of resource to be created
    */

    /*
      PUT shorthands

      this.put('/contacts/:id');
      this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
    */

    /*
      DELETE shorthands

      this.del('/contacts/:id');
      this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

      // Single object + related resources. Make sure parent resource is first.
      this.del('/contacts/:id', ['contact', 'addresses']);
    */

    /*
      Function fallback. Manipulate data in the db via

        - db.{collection}
        - db.{collection}.find(id)
        - db.{collection}.where(query)
        - db.{collection}.update(target, attrs)
        - db.{collection}.remove(target)

      // Example: return a single object with related models
      this.get('/contacts/:id', function(db, request) {
        var contactId = +request.params.id;

        return {
          contact: db.contacts.find(contactId),
          addresses: db.addresses.where({contact_id: contactId})
        };
      });

    */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
