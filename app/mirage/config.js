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
        let sensors = {"data":[{"type":"sensor","id":"test_7","attributes":{"type":"temperature","name":"Температураводы","place":"Аквариум","value":6.0,"online":true,"parameters":[{"name":"active","value":true}]}},{"type":"sensor","id":"gpio_5","attributes":{"type":"temperature","name":"voltage","place":"scheme","value":3291,"online":true,"min":0,"max":3300,"parameters":[{"name":"active","value":true},{"name":"mode","value":"multimeter"},{"name":"active_level","value":"low"},{"name":"pull","value":"low"},{"name":"formula","value":"(3300*x)/4096"}]}},{"type":"sensor","id":"gpio_10","attributes":{"type":"water level","name":"bath is full","place":"bath","value":0,"online":true,"min":0,"max":1,"parameters":[{"name":"active","value":true},{"name":"mode","value":"digital"},{"name":"active_level","value":"low"},{"name":"pull","value":"low"}]}},{"type":"sensor","id":"gpio_4","attributes":{"type":"dimmer","name":"light dimmer","place":"bedroom","value":0,"online":true,"min":0,"max":100,"parameters":[{"name":"active","value":true},{"name":"mode","value":"dimmer"},{"name":"active_level","value":"low"},{"name":"pull","value":"low"}]}},{"type":"sensor","id":"gpio_6","attributes":{"type":"scene","name":"I'm home","place":"hall","value":0,"online":true,"min":0,"max":7,"parameters":[{"name":"active","value":true},{"name":"mode","value":"sequential"},{"name":"active_level","value":"low"}]}}]};
        return sensors;
    });
    this.get('/rest/v2/sensors/temperature', function() {
        let temperature = {"data":[{"type":"temperature","id":"test_7","attributes":{"name":"Температураводы","place":"Аквариум","value":19.0,"online":true,"parameters":[{"active":"true"}]}},{"type":"temperature","id":"gpio_5","attributes":{"name":"water temperature","place":"аквариум","value":0,"online":true,"parameters":[{"active":"true"},{"mode":"dimmer"},{"active_level":"low"},{"pull":"low"}]}}]};
        return temperature;
    });
    this.get('/rest/v2/sensors/scene ', function() {
        let scene ={"data":[{"type":"scene","id":"gpio_6","attributes":{"name":"I'm home","place":"hall","value":3,"online":true,"min":"0","max":"7","parameters":[{"active":"true"},{"mode":"sequential"},{"active_level":"low"},{"min":"0"},{"max":"7"}]}}]};
        return scene;
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
