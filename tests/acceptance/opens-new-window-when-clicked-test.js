import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'service-test/tests/helpers/start-app';

module('Acceptance | opens new window when clicked', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('when clicking on the watch report component', function(assert) {
  assert.expect(1);
  
  visit('/reports');
  click('button');
  
  andThen(function() {
    assert.ok(false);
  });
});
