import { moduleForModel, test } from 'ember-qunit';

moduleForModel('track', 'Unit | Model | track', {
  // Specify the other units that are required for this test.
  needs: ['model:album']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
