<template>
    <div class="factility">
        <detailSection 
        :headerText="'房屋设施'" 
        :moreText="'查看全部设施'"
        >
            <div class="factility-inner">
                <template v-for="(item,index) in houseFacility.houseFacilitys" :key="index">
                    <div class="item" v-if="houseFacility.facilitySort.includes(item.groupId)">
                        <div class="head">
                            <img :src="item.icon" alt="">
                            <div class="text">{{ item.groupName }}</div>
                        </div>
                        <div class="list">                            
                            <template v-for="(iten,index) in item.facilitys.slice(0,4)" :key="index">
                                <div class="iten">
                                    <i class="icon_check icon"></i>
                                    <span>{{ iten.name }}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>

        </detailSection>
            
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detailSection.vue';

let props = defineProps({
    houseFacility:{
        type: Object,
        default: () => ({}),
    }
})
</script>

<style lang="less" scoped>
.factility {
    margin-top: 20px;
    .factility-inner{
    margin: 10px;
    background-color: #eeeeeed8;
    border-radius: 8px;
    .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0; 
        border-bottom: 1px solid #f7f7f7d8;
        .head{
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            img{
                width: 30px;
                display: block;
            }
            .text{
                font-size: 13px;
            }
        }
        .list{
            width: 70%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            .iten{
                width: 50%;
                height: 30px;
                line-height: 30px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .icon_check{
                    display: block;
                    width: 12px;
                    height: 12px;
                    background: url('@/assets/images/detail/icon_check.png') no-repeat center/cover;
                }
                span{
                    font-size: 12px;
                }
            }
        }
    }
}
}
</style>