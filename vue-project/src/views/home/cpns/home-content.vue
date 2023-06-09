<template>
    <div class="content">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item,index) in houseList" :key="item.data.houseId">
                <houseListV9 v-if="item.discoveryContentType == 9" :item-data="item.data"/> 
                <houseListV3 v-else-if="item.discoveryContentType == 3" :item-data="item.data"/>
            </template>
        </div>
    </div>
</template>

<script setup>
import useHomeStore from '@/store/module/home';
import { storeToRefs } from 'pinia';
import houseListV9 from '@/components/houseList/houseList-v9.vue';
import houseListV3 from '@/components/houseList/houseList-v3.vue';

const houseStore = useHomeStore()
const { houseList} = storeToRefs(houseStore)
</script>

<style lang="less" scoped>
.content{
    padding: 10px 15px;
    .title{
        font-size: 15px;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
}
</style>