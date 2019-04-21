<template>
    <div>
        <h1> hello one</h1>
        <p>My name is {{ name }}</p>
        <button @click="$emit('a','弟弟')">修改我弟弟的名字</button>
        <Hellothree :name="threeName"></Hellothree>
    </div>
</template>
<script>
import Hellothree from './Hellothree'
export default {
    props:{
        name:{
            type: String
        },

        hello:{
            type:String
        }
    },

    watch:{
        hello(newVal,oldVal){
            this.threeName = newVal
        }
    },

    data(){
        return{
            threeName: 'three'
        }
    },

    components: {
        Hellothree
    }
}
</script>
