<template>
    <div class="searchBox">
        <!-- 位置 -->
        <div class=" item location" @click="cityClick()">
            <div class="city"> {{city.cityName || "深圳"}} </div>
            <div class="position" @click="getPosition()">
                <span>我的位置</span>
                <img src="@/assets/images/home/icon_location.png" alt="icon">
            </div>
        </div>
        <!-- 日期范围 -->
        <div class="item date-rabge" @click="showCalendar = true">
            <div class="start">
                <div class="date">
                    <div class="tip">入住</div>
                    <div class="time">{{ startDateStr }}</div>
                </div>
            </div>
            <div class="time ">共 {{ countDays }} 晚</div>

            <div class="end">
                <div class="date">
                    <div class="tip">离店</div>
                    <div class="time">{{ endDateStr }}</div>
                </div>
            </div>
        </div>
        <van-calendar 
            v-model:show="showCalendar" 
            type="range"
            color='#ff9a54'
            :round="false"
            @confirm="onConfirmCalendar" 
        />
        <!-- 告示栏 -->
        <div class="item price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <div class="item keyword bottom-gray-line">关键字/位置/民宿店</div>
        
        <!-- 热搜地区/城市 -->
        <div class="item hot-suggest">
            <template v-for="(item,index) in hotTag.hotSuggests" :key="index">
                <div class="list"
                :style="{
                    backgroundColor:item.tagText.background.color,
                    color:item.tagText.color
                    }"
                > {{ item.tagText.text }} </div>
            </template>   
        </div>
        <!-- 搜索按钮 -->
        <div class="btnSearch">
            <div class="btn" @click="clickSearch()"> 开始搜索 </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/store/module/city.js'
import { ref,toRef,computed } from 'vue';
import { formatMonthDay,getDiffyDays } from '../../../utils/format_data';
import useHomeStore from '../../../store/module/home';
import { useMainStore } from '../../../store/module/mian';
import { storeToRefs } from 'pinia';
const router = useRouter()
// 获取城市
const cityClick = () =>{
    router.push('/city')
}
// 当前城市
const cityStore = useCityStore()
const city = toRef(cityStore.currentCity) 

// 获取当前位置的经纬度
const getPosition = () => {
    navigator.geolocation.getCurrentPosition(res=>{
        console.log(res)
    },err =>{
        console.log(err)
    })
}
// 日期范围的处理
const mianStore = useMainStore()
const {startDate,endDate } = storeToRefs(mianStore)

const startDateStr = computed(()=>formatMonthDay(startDate.value)) 
const endDateStr =computed(()=>formatMonthDay(endDate.value)) 
// 住房时间
const countDays = computed(()=>getDiffyDays(startDate.value,endDate.value))
// 日期选择
const showCalendar = ref(false)
const onConfirmCalendar = (values) =>{
    const [start,end] = values
   mianStore.startDate = start
   mianStore.endDate = end
    showCalendar.value = false;
    countDays.value = getDiffyDays(start,end)
}
// 获取热门标签
const hotTag = useHomeStore()
// 搜索
const clickSearch = () => {
    router.push({
        path:'/search',
        query:{
            startDate:startDateStr.value,
            endDate:endDateStr.value,
            currentCity:city.value.cityName
        }
    })
}
</script>

<style lang="less" scoped>
.searchBox{
    .item{
        height: 50px;
        padding: 0 20px;
    }
    .location{
        font-size: 14px;
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
        .city{
            flex:1;
            color: #333;
            font-size: 15px;
        }
        .position{
            span{
                color: #666;
                font-size: 12px;
           }
            img{
                height: 18px;
                width: 18px;
                margin-left: 10px;
            }
        }
    }
    .date-rabge{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        .start{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .time{
                margin-top: 2px;
                font-size: 15px;
            }
        .date{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .tip{
                font-size: 14px;
                color: #333;
            }
        }
    }
    .keyword{
        height: auto;
    }
    .bottom-gray-line{
        font-size: 15px;
        color: #555;
    }
    .price-counter{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .hot-suggest{
        height: auto;
        padding-top: 5px;
        padding-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .list{
            padding: 4px 6px;
            border-radius: 10px;
            margin: 8px 5px 0;
            font-size: 12px;
            line-height: 1;
        }
    }
    .btnSearch{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        .btn{
            font-size: 18px;
            height: 30px;
            line-height: 30px;
            font-weight: 500;
            width: 100%;
            text-align: center;
            color: #fff;
            background-image: var(--theme-line-bgColor);
            border-radius: 20px;
        }
    }
}
</style>