import Ember from 'ember';

export function combine(params/*, hash*/) {
  return params[0]+params[1];
}

export default Ember.Helper.helper(combine);
