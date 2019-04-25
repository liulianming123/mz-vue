<template>
    <div>
        <h1>{{ fullname }}</h1>
        <h1>{{ agname }}</h1>
        <button @click="chname">aaa</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  created () {
    console.log(this.$store.state.b.name)
  },

  methods: {
    ...mapMutations({
      chname: 'a/chname'
    }
    )
  },

  computed: {
    ...mapGetters({
      fullname: 'fullname',
      agname: 'a/agname'
    })
  }
}
</script>
