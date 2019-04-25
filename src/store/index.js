import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './a'
import moduleB from './b'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstname: '张',
    lastname: 'ss'
  },

  getters: {
    fullname (state, getters) {
      return state.firstname + state.lastname
    }
  },

  modules: {
    a: moduleA,
    b: moduleB
  }
})
