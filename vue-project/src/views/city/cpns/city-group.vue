<template>
    <div class="city-group">
        <van-index-bar :sticky="false" :index-list="indexList">
            <van-index-anchor index="热门" />
               <div class="list">
                    <template v-for="(value,key,index) in groupData.hotCities" :key="index">
                        <div class="tag" @click="clickBack(value)">{{ value.cityName }}</div>
                    </template>
               </div>

            <template v-for="(item,key,index) in groupData.cities" :key="index">
                    <!-- <div class="group-item">
                        <h5>{{ item.group }} </h5>
                        <div class="list">
                            <template v-for="(city,index) in item.cities" :key="index">
                                <div class="group-item-city">{{city.cityName}}</div>
                            </template>
                        </div>
                    </div> -->
                
                    <van-index-anchor :index="item.group" />
                    <template v-for="(city,index) in item.cities" :key="index">
                        <van-cell :title="city.cityName" @click="clickBack(city)"/>
                    </template>
                </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue';
import useCityStore from '@/store/module/city.js';
// 接收参数
const props = defineProps({
    groupData:{
        type:Object,
        default:()=>({})
    }
})
// 创建侧边栏的suoyin
const indexList = computed(()=>{
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
})
const router = useRouter();
const cityStore = useCityStore()
// 监听城市的点击事件
const clickBack = (city)=>{
    //  存储数据
    cityStore.currentCity = city
    // 返回页面
    router.back()
}
</script>

<style lang="less" scoped>
.city-group{
    .list{
        padding: 10px 15px 10px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        .tag{
            margin: 5px;
            width: 60px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            text-align: center;
            background-color: var(--primary-color-o);
            border-radius: 20px;
        }
    }
}
</style>