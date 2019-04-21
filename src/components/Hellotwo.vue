<template>
    <div>
        <h1> hello two</h1>
        <p>My name is {{ name }}</p>
         <button @click="$emit('b','大傻子')">修改我哥哥儿子的名字</button>
    </div>
</template>
<script>
export default {
    props:{
        name:{
            type: String
        }
    }
}
</script>
