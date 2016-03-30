import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('alte-components/small-box', 'Integration | Component | alte components/small box', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{alte-components/small-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#alte-components/small-box}}
      template block text
    {{/alte-components/small-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
