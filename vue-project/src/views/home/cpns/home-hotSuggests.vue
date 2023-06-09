<template>
    <div class="HotSuggests">
        <h2>HotSuggests</h2>
    </div>
</template>

<script setup>
const props = defineProps({
    hotSuggests:{
        type:Array,
        defaults:()=>[]
    }
})
console.log(hotSuggests);


</script>

<style lang="less" scoped>

</style>