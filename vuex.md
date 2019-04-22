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

