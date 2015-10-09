import Ember from 'ember';

const { inject } = Ember;

export default Ember.Controller.extend({
  newWindow: inject.service('new-window'),

  isFetching: false,
  reportUrl: 'about:blank',

  actions: {
    fetchReport() {
      const newWindow = this.get('newWindow');

      newWindow.open(this.get('reportUrl'));
    },
  },
});

