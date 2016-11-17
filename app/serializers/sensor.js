import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
    keyForAttribute: function(attr) {
        return attr;
    },
    serialize(snapshot, options) {
        var json = this._super(...arguments);

        console.log('json :', json);

        console.log('answer :', JSON.stringify(json));

        return JSON.stringify(json);
    }
});
