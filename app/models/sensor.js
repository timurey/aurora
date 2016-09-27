import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo,hasMany } from 'ember-data/relationships';

export default Model.extend({
    name: attr(),
    type: attr(),
    place: attr(),
    value: attr(),
    online: attr(),
    parameters: attr('array'),
    min: attr(),
    max: attr(),
    percent: Ember.computed('min', 'max', 'value', function() {
        return Ember.String.htmlSafe(Math.floor((this.get('value')-this.get('min')) / (this.get('max')-this.get('min')) * 100));

    })
});
