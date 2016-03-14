import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-lte-user-panel', 'Integration | Component | admin lte user panel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-lte-user-panel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-lte-user-panel}}
      template block text
    {{/admin-lte-user-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
