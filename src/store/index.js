import Vue from 'vue'
import vuex from 'vuex'
import getters from './getters'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {

  },
  getters
})

export default store
