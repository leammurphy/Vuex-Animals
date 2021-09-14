// This is a new Vuex store which is a global object. Any data that is required in other parts of this application
// is stored here and imported to the component
import Vue from "vue";
import Vuex from "vuex";

import state from './state'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions

});
