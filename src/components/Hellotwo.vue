<template>
    <div>
        <h1> hello two</h1>
        <p>My name is {{ name }}</p>
        <!-- <button @click="$emit('b','大傻子')">修改我哥哥儿子的名字</button> -->
        <button @click="fn1">修改我哥哥儿子的名字</button>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      'name': (state) => state.twoName
    })
  },
  methods: {
    ...mapMutations([
      'chgThreeName'
    ]),
    fn1 () {
      var that = this
      // this.$store.commit('chgThreeName', { name: 'adasdas' })
      //   this.$store.commit({
      //     type: 'chgThreeName',
      //     name: 'aaaa'
      //   })
      setTimeout(() => {
        that.chgThreeName({ name: 'sss' })
      }, 2000)
    }
  }
}
</script>
