<template>
    <div>
        <h1> hello one</h1>
        <p>My name is {{ name }}</p>
        <!-- <button @click="$emit('a','弟弟')">修改我弟弟的名字</button> -->
        <!-- <button @click="chgTwoName({ name:'didi'})">修改我弟弟的名字</button> -->
        <button @click="fn1">修改我弟弟的名字</button>
        <!-- <Hellothree :name="threeName"></Hellothree> -->
        <Hellothree></Hellothree>
    </div>
</template>
<script>
import Hellothree from './Hellothree'
// import { mapState } from 'vuex'
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  props: {
    // name: {
    //   type: String
    // },
    hello: {
      type: String
    }
  },
  //   watch: {
  //     hello (newVal, oldVal) {
  //       this.threeName = newVal
  //     }
  //   },
  data () {
    return {
      // threeName: 'three'
    }
  },
  computed: {
    ...mapState({
      threeName: 'threeName',
      'name': (state) => state.oneName
    })
  },
  components: {
    Hellothree
  },
  methods: {
    ...mapMutations([
      'chgTwoName',
      'chgThreeName'
    ]),
    ...mapActions([
      'fn1'
    ])
    // fn1 () {
    // //   this.$store.commit('chgTwoName', '滴滴')
    // //   this.$store.commit({
    // //     type: 'chgTwoName',
    // //     name: '滴啊滴'
    // //   })
    //   this.chgTwoName({
    //     name: 'Didi'
    //   })
    // }
    // fn1 () {
    //   // var that = this
    //   // setTimeout(function () {
    //   //   that.chgTwoName({ name: '弟弟的' })
    //   //   setTimeout(() => {
    //   //     that.chgThreeName({ name: '敌众敌' })
    //   //   }, 4000)
    //   // }, 2000)
    //   this.$store.dispatch('fn1')// 调用仓库的fn1

    // }
  }
}
</script>
