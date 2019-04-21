<template>
  <div class="app">
      <Helloone :name="oneName" :hello='oneHello' @a="twoName = $event"></Helloone> 
      <Hellotwo :name="twoName" @b="oneHello = $event"></Hellotwo>
  </div>
</template>
//自定义事件$event接收的是传递参数
<script>
import Helloone from './components/Helloone'
import Hellotwo from './components/Hellotwo'
export default {
  data () {
      return{
        oneName : 'one',
        twoName : 'two',
        oneHello:''
      }
  },

  components: {
    Helloone,
    Hellotwo
  },

  // methods:{
  //   fn1(){
  //     this.twoName
  //   }
  // }
}
</script>
