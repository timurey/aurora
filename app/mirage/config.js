export default function() {
    this.get('/rest/v1/restapi', function() {
        return {
            data: {
                classes: [{
                    name: 'clock',
                    path: '/rest/v1/clock',
                    method: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ]
                }, {
                    name: 'cpu',
                    path: '/rest/v1/cpu',
                    method: [
                        'GET'
                    ]
                }, {
                    name: 'executors',
                    path: '/rest/v1/executors',
                    method: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ]
                }, {
                    name: 'onewire',
                    path: '/rest/v1/onewire',
                    method: [
                        'GET'
                    ]
                }, {
                    name: 'test_rest',
                    path: '/rest/v1/test',
                    method: []
                }, {
                    name: 'sensors',
                    path: '/rest/v1/sensors',
                    method: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ]
                }, {
                    name: 'variables',
                    path: '/rest/v1/variables',
                    method: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ]
                }, {
                    name: 'ntp',
                    path: '/rest/v1/ntp',
                    method: [
                        'GET',
                        'POST',
                        'PUT',
                        'DELETE'
                    ]
                }]
            }
        };
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
            id:1,
            attributes:{
                test: 'test1'
            }
        },{
            type: 'test',
            id:2,
            attributes:{
                test: 'test2'
            }
        }];
        return {data: tests};
    });

    // These comments are here to help you get started. Feel free to delete them.

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
