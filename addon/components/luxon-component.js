import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/luxon-component';
import { DateTime } from 'luxon';

export default Component.extend({
  layout,
  someDate: computed(function() {
    let dt = DateTime.local();
    return dt.toFormat();
  })
});
