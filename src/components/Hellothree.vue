<template>
    <div>
        <h1> hello three</h1>
        <p>My name is {{ name }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
//   props: {
//     name: {
//       type: String
//     }
//   }
  computed: {
    ...mapState({
      'name': (state) => state.threeName
    })
  }
}

</script>
