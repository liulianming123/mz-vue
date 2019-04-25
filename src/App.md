<template>
  <div class="app">
    <!-- <Helloone :name="oneName" :hello='oneHello' @a="twoName = $event"></Helloone> -->
    <!-- <Helloone :hello='oneHello'></Helloone> -->
    <Helloone></Helloone>
    <!-- <Hellotwo :name="twoName" @b="oneHello = $event"></Hellotwo> -->
    <!-- <Hellotwo @b="oneHello = $event"></Hellotwo> -->
    <Hellotwo></Hellotwo>
    <hr>
    <!-- <h1>{{ oneAndTwoName }}</h1> -->
  </div>
</template>
//自定义事件$event接收的是传递参数
<script>
import { mapState, mapGetters } from 'vuex'
import Helloone from './components/Helloone'
import Hellotwo from './components/Hellotwo'
export default {
  data () {
    return {
      // oneName: this.$store.state.oneName,
      // twoName: this.$store.state.twoName,
      oneHello: '',
      lastname: '张',
      firstname: '三'
    }
  },

  computed: {
    ...mapState([
      'oneName',
      'twoName'
    ]),
    ...mapGetters([
      'oneAndTwoName'
    ]),
    fullName () {
      return this.lastname + '' + this.firstname
    }
  },

  // computed: {
  //   ...mapState({
  //     // key: String
  //     // key: Function
  //     hhh: (state) => state.oneName, // 箭头函数中只有一句语句，不写括号默认return出去
  //     twoName: 'twoName',
  //     bbb: (state) => {
  //       return state.oneName + '' + state.twoName
  //     }
  //   })
  // },

  components: {
    Helloone,
    Hellotwo
  }

  // methods:{
  //   fn1(){
  //     this.twoName
  //   }
  // }
}
</script>
