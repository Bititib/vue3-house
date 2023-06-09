<template>
    <div class="searchBar">
        <van-search
            v-model="value"
            shape="round"
            show-action
            placeholder="关键字/位置/民宿店"
            @search="onSearch"
            >
            <template #left-icon>
               <div class="searchCitybox">
                    <div class="cityName">{{'住 '+ startTime }} </div>
                    <div class="dataTime">{{ '离 '+ endTime }}</div>
               </div>
            </template>
            <template #action>
                <div @click="onClickButton">搜索</div>
            </template>
</van-search>
    </div>
</template>

<script setup>
import { useMainStore } from '../../store/module/mian';
import { formatMD } from '@/utils/format_data.js'
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
const mianStore =  useMainStore()
const {startDate,endDate} = storeToRefs(mianStore)
const startTime = computed(()=>formatMD(startDate.value))
const endTime = computed(()=>formatMD(endDate.value))
</script>

<style lang="less" scoped>
.searchBar{
    .searchCitybox{
        width: 60px;
        font-size: 8px;
        color: #555555 !important;
        div{
            height: 14px;
            line-height: 14px;
        }
    }
}
</style>