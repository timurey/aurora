import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('admin-lte-searchmenu-js', 'Integration | Component | admin lte searchmenu js', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{admin-lte-searchmenu-js}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#admin-lte-searchmenu-js}}
      template block text
    {{/admin-lte-searchmenu-js}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
