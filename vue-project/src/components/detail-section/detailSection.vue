<template>
    <div class="detailScetion">
        <h2 class="title">{{ headerText }}</h2>
        <div class="contianer">
            <slot>
                <h3>我是默认内容</h3>
            </slot>
        </div>
        <div class="footer">
            {{ moreText }} &gt;
        </div>
    </div>
</template>

<script setup>

let props = defineProps({
    headerText:{
        type:String,
        default:'默认标题',
    },
    hasMore:{
        type:Boolean,
        default:true,
    },
    moreText:{
        type:String,
        default:'',
    }
}) 

</script>

<style lang="less" scoped>
.detailScetion {
    margin-top: 20px;
    .title{
        padding: 2px;
        border-bottom: 1px solid #eee;
    }
    
    .footer{
        height: 40px;
        line-height: 40px;
        color: var(--primary-color);
        font-size: 12px;
        display: flex;
        flex-direction: row-reverse;
    }


}
</style>