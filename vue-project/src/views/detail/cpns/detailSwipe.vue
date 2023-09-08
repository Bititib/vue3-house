<template>
   <div class="swipeBox">
    <van-swipe class="swipe-list" :autoplay="2000" :loop="true" lazy-render>
        <template v-for="(item,index) in swipeData" :key="index">
            <van-swipe-item class="item">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </template>
        
        <template #indicator="{ active, total }">
            <div class="custom-indicator">
                <template v-for="(value,key,index) in swipeGroup" :key="index">
                   <span class="item" :class="{active: swipeData[active]?.enumPictureCategory == key}">
                      
                        <span class="text"> {{ transformName(value[0].title) }} </span>
                        <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                             {{getCategoryIndex(swipeData[active])}}/{{value.length}} 
                        </span>
                    </span>
                </template>
            </div>
        </template>
    </van-swipe>
   </div>
</template>

<script setup>
let props = defineProps({
    swipeData:{
        type:Array,
        default:() =>[],
    }
});

// 转数据格式
const swipeGroup = {};
for(const item of props.swipeData)
{
    let valueArr = swipeGroup[item.enumPictureCategory]
    if(!valueArr){
        valueArr = [];
        swipeGroup[item.enumPictureCategory] = valueArr;
    }
    valueArr.push(item);
}
const transformName = (houseName) =>{
    let reg = /【(.*?)】/ig;
   	let result = reg.exec(houseName)
    return result[1].replace(/[1-9]/,'')
}
const getCategoryIndex = (item) =>{
    let valueIndex = swipeGroup[item.enumPictureCategory] 
    return valueIndex.findIndex( data => data === item)+1
}
</script>

<style lang="less" scoped>
.swipeBox{
    .swipe-list{
        .item{
            img{
                width: 100%;
            }
        }
        .custom-indicator {
            position: absolute;
            right: 0px;
            bottom: 2px;
            padding: 2px 5px ;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.4);
            line-height: 1;
            .item {
                margin: 0 3px;
                &.active{
                    background-color: #fff;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>