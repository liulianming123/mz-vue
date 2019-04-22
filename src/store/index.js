import Vue from 'vue'
import Vuex from 'vuex'

// 注意 script 标签。都需要use一下
Vue.use(Vuex)

// 暴露仓库的实例对象

export default new Vuex.Store({
  state: {
  // 数据状态
    oneName: 'one',
    twoName: 'two',
    threeName: 'three'
  },

  getters: {
  // 基于state或者其余getter的getter
  },

  mutations: {
    // 突变，唯一能修改state数据的东西
    chgTwoName (state, obj) {
    //   setTimeout(() => {
      state.twoName = obj.name
    //   }, 2000) // 不能有异步的代码
    },
    chgThreeName (state, obj) {
      state.threeName = obj.name
    }
  },

  actions: {
    // 能够异变调用mutaion 的东西

  }
})
