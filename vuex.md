vuex 使用步骤

1.安装 npm install vuex --save
2.src/store 文件夹 index.js  vuex仓库的文件
3.配置 src/store/index.js
4.main.js new Vue 需要配置上 store 这个选项。

# 如何从仓库中获取 state 的数据

this.$store 实例对象
1.可以通过 this.$store.state.xxx 获取仓库中 xxx 的值
2.可以通过 mapState 辅助函数的方式去 取得仓库中的 数据
mapState(Array|Object).用在 组件的 计算属性选项中。他会返回一个对象
```js


  computed: mapState([
    'oneName',
    'twoName'
  ]),

  //上面的代码其实是简写，真实情况如下：

  computed: {
      oneName (){
          return this.$store.state.oneName
      }, 
      twoName (){
          return this.$store.state.twoName
      }, 
  }


//为了解决组件可能还有自身的计算属性这种情况，我们可以采用 展开运算符 (...)
  computed: {
     ...mapState([
      'oneName',
      'twoName'
  ]),
     //这后面就可以写其余的计算属性了
  }   

  //如果在组件中，不想取名叫 oneName ，而想取名为 hhh ，就需要将mapState接受的参数修改为一个对象
  computed: {
      ...mapState({
          //key: String
          //key: Function
          hhh: (state) => state.oneName, //箭头函数中只有一句语句，不写括号默认return出去
              twoName: 'twoName',
              bbb: (state) =>{
                  return state.oneName + '' + state.twoName
              }

      })
  }


  #如何 修改仓库中的数据

  1.仓库中的数据首先都是不允许由组件直接修改的，首先需要在仓库中定义个 mutation (突变) 。然后组件中可以通过 this.$store.commit('mutation的名字') 来提交那个 mutation .然后由 mutation 去修改。
  2.this.$store.commit() 可以是 对象的提交方式
    this.$store.commit({
        type: 'mutation的名字' , //对象形式的话， 必须要有一个 type 属性
        name: '滴滴'
    })
3.同样的也有辅助函数来使用 mapMutation 跟mapState 类似，可以有展开运算符。返回的也是对象。可以有接受 数组 或者 对象的情况。但是就一点不一样。mapState 与 mapGetters 是用在 computed 选项中。而mapMutations与mapActions 用在 methods 里面。

  methods: {
    ...mapMutations([
       'chgTwoName',
       'chgOneName'   
    ]),
  } 

  //上面的代码其实也是简写，真真的样子长下面这样
  methods: {
      chgTwoName (payload) {
          this.$store.commit('chgTwoName',payload)
      },
       chgOneName (payload) {
          this.$store.commit('chgOneName',payload)
      }
  }

4.!!!mutation 一定要是一个同步的方法

5.刚才代码的 fn1 其实就是一个 action的模样   action就是能够写异步的代码，然后能够操作 mutation 。并且可以多次操作。目前还需要将 fn1 移动到仓库中书写


#如何在组件中调用 action 呢
  1.this.$store.dispath('action的名字',payload参数)
  2.this.$store.dispath({
      type: 'action的名字'
      //其余参数
  })
  3.mapActions 辅助函数

#getters
1.this.$store.getters.xxx
2.mapGetters



#modules

  包含了仓库相关选项的一个对象就可以称之为一个 module。module如果要使用上，还需要
在 new Vuex.Store的地方配置 modules 的选项


1.仓库的子模块中 getters 或 mutactions 中 state 的参数是当前模块的 state
2.子模块中 getters 可以通过第三个参数获取 根模块的state 。但我们mutactions 不可以。
3.子模块中 actions 可以通过 第一个参数 context 的 rootState 属性去获取到根模块的 state。
4.默认情况下，不管你的模块嵌套了几层，我们的模块的 action mutation getter 都是注册在全局的
5.带有命名空间的模块。
   1.getters 想要使用全局的 getters
      a (state, getters, rootState, rootGetter)
   2.!!!! mutation 不管是带有命名空间还是没带有命名空间都拿不到全局的。只有两个参数，第一个state (当前模块的state)。第二个payload(参数)。 没有rootState，也没有 rootGetter  
   3.actions 的第一个参数 context 身上会有 rootstate 与 rootGetter
   4.actions 中如果要 commit 或者 dispath 一个全局的 mutaction 或 action 。只需要传入第三个参数 设置 { root: true } 

   总结：

   1.如果要用仓库模块，每一个仓库模块都要加上 命令空间的定义
   2。组件中要使用 仓库子模块的数据，还是通过 辅助函数即可

   ...mapState({
     'firstname':'firstname',
     'dname': (state) => state.d.name  //拿d模块里的name
   })
   ...mapState('c',['name']) //拿c模块里的name
