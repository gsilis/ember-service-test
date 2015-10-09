import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  isFetching: false,

  click() {
    if (typeof this.attrs.fetchReport === 'function') {
      this.attrs.fetchReport();
    }
  },
});

