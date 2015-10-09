import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'service-test/tests/helpers/start-app';

module('Acceptance | opens new window when clicked', {
  beforeEach: function() {
    this.application = startApp();
    this.newWindow = this.application.__container__.lookup('service:new-window');
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('when clicking on the watch report component', function(assert) {
  assert.expect(1);

  this.newWindow.open = function(url) {
    assert.equal(
      url, 'about:blank',
      'passes the new window url to the service'
    );
  };
  
  visit('/reports');
  click('button');
});
