import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('watch-report', 'Integration | Component | watch report', {
  integration: true
});

test('it emits an action when called', function(assert) {
  assert.expect(1);

  this.set('actions', {
    fakeAction() {
      assert.ok(true, 'Fake action was called');
    }
  });

  this.render(
    hbs`{{watch-report fetchReport=(action "fakeAction")}}`
  );

  this.$('button').click();
});

test('when no action is passed in', function(assert) {
  this.render(
    hbs`{{watch-report}}`
  );

  assert.ok(this.$('button').click(), 'button works without action');
});

