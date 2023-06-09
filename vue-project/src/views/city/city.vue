<template>
    <div class="city top-page">
        <div class="top">
            <van-search
            v-model="value"
            show-action
            placeholder="城市/区域/位置"
            shape="round"
            @cancel="onCancel"
            />
        
            <van-tabs v-model:active="active">
                <template v-for="(value,key,index) in allCities" :key="index">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>
            </van-tabs>
            
        </div>
        <div class="content">
            <!-- 实现方式一: 进行切换渲染速度慢 -->
           <GroupCity :groupData="currentGroup"/>
           <!-- 实现方式二 : 进行切换渲染速度优化 -->
           <!-- <template v-for="(value,key,index) in allCities" :key="index">
                <GroupCity v-show="active === key" :group-data="value" />
            </template> -->
        </div>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from '@/store/module/city.js';
import { storeToRefs } from 'pinia';
import GroupCity from './cpns/city-group.vue'
const router =useRouter()
const back =()=>{
    router.back()
}
// search 搜索
const value = ref('');
const onCancel = () => back();
// Tab标签
const active = ref('');

// 获取城市数据
const cityStore = useCityStore()
cityStore.fetchAllcitiesData()
const { allCities } = storeToRefs(cityStore)
// 存储城市数据
const currentGroup = computed(()=>allCities.value[active.value])

</script>

<style lang="less" scoped>
.city{
    .top{
        position: relative;
        z-index: 2;
        box-shadow:1px 1px 2px 0px #c9c8c8 ;
    }

    .content{
        box-sizing: border-box;
        height: calc(100vh - 100px);
        overflow: auto;
    }
}
</style>