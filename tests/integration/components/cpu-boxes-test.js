import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cpu-boxes', 'Integration | Component | cpu boxes', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{cpu-boxes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#cpu-boxes}}
      template block text
    {{/cpu-boxes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
