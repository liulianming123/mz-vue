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
    oneAndTwoName (state, getters) {
      return state.oneName + '&' + state.twoName
    }
  },

  mutations: {
    // 突变，唯一能修改state数3据的东西
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
    // context -> 理解为 this.$store 有 commit 有 state 有 getters
    fn1 ({ commit, state }) {
      // var that = this
      setTimeout(function () {
        // that.chgTwoName({ name: '弟弟的' })
        // this.$store.commmit({ type: 'chgtwoName', name: '弟弟2'})
        commit({
          type: 'chgTwoName',
          name: '弟弟2'
        })
        setTimeout(() => {
          commit({
            type: 'chgThreeName',
            name: '弟弟222'
          })
        }, 4000)
      }, 2000)
    }
  }
})
