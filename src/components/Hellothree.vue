<template>
    <div>
        <h1> hello three</h1>
        <p>My name is {{ name }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name:{
            type:String
        }
    }
}
</script>

