import { moduleFor, test } from 'ember-qunit';

moduleFor('service:new-window', 'Unit | Service | new window', {});

test('it tries to open a new window', function(assert) {
  const service = this.subject();

  assert.ok(service);
});

