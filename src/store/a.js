// 仓库的模块文件
const state = {
  name: 'aname'
}
const getters = {
  agname (state, getters) {
    console.log('== 子模块 a中的state')
    console.log(state)
    return state.name + '大狗子'
  }
}
const mutations = {
  chname (state) {
    console.log(state)
    state.name = '你是是是是ss'
  }
}
const actions = {}

export default {
  namespaced: true, // 将这个模块定义为带有命名空间的模块，不会注册在全局
  state,
  getters,
  mutations,
  actions
//   modules: {
//     a: {
//       state: {
//         name: 'hello'
//       }
//     }
//   }
}
