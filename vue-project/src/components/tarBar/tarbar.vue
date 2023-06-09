<template>
    <div class="tarBar">
        <van-tabbar v-model="active" active-color="#ff9854" route>
            
            <template v-for="item in tabbarData">
                <van-tabbar-item :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon="props">
                    <van-icon :name="item.iconName" />
                    </template>
                </van-tabbar-item>  
            </template>
            
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const tabbarData = [
    {
        text:"首页",
        iconName:"wap-home-o",
        path:"/home"
    },
    {
        text:"收藏",
        iconName:"like-o",
        path:"/favor"
    }
    ,{
        text:"订单",
        iconName:"balance-list-o",
        path:"/order"
    },
    {
        text:"消息",
        iconName:"comment-o",
        path:"/message"
    }
]
const active = ref(0);


</script>

<style lang="less" scoped>

</style>