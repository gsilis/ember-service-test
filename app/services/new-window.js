import Ember from 'ember';

export default Ember.Service.extend({
  open(url, name = '_blank') {
    window.open(url, name);
  },
});
