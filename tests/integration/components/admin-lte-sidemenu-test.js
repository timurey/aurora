import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-lte-sidemenu', 'Integration | Component | admin lte sidemenu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-lte-sidemenu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-lte-sidemenu}}
      template block text
    {{/admin-lte-sidemenu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
