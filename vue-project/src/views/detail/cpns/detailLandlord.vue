<template>
    <div class="landlord">
        <detailSection :headerText="'房东介绍'" :moreText="'查看更多'">
            <div class="landlord-content">
               <div class="hoteScroll">
                <img :src="landlord.topScroll" alt="">
               </div>
               
               <div class="heteLogo">
                    <div class="left">
                        <div class="avater">
                            <img :src="landlord.hotelLogo" alt="">
                        </div>
                        <div class="hoteText">
                            <div class="hoteName">{{ landlord.hotelName }}</div>
                            <div class="tags">
                                <template v-for="(item,index) in landlord.hotelTags" :key="index">
                                    <span 
                                    class="item" 
                                    :style="{'color':item.tagText.color}"
                                    >
                                    {{ item.tagText.text }}
                                </span>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="right">
                        联系房东
                    </div>
               </div>

               <div class="hoteBottom">

                <template v-for="(item,index) in landlord.hotelSummary" :key="index">
                    <div class="sumrry">
                        <div class="title">{{ item.title }}</div>
                        <div class="introduction">{{ item.introduction }}</div>
                        <div class="tip">{{ item.tip }} </div>
                    </div>
                </template>
               </div>

            </div>
        </detailSection>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detailSection.vue';

let props = defineProps({
    landlord: Object,
    default:()=>({}),
})

</script>

<style lang="less" scoped>
.landlord-content{
    .hoteScroll{
        margin-top: 5px;
        img{
            width: 100%;
        }
    }
    .heteLogo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            display: flex;
            justify-content: center;
            align-items: center;
            .avater{
                margin-right:5px;
                img{
                    width: 60px;
                }
            }
            .tags{
                margin-top: 8px;
                width: 105%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .item{
                    font-size: 12px;
                }
            }
        }
        .right{
            font-size: 14px;
            color: var(--primary-color);
        }
    }
    .hoteBottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        .sumrry{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: rgba(228, 228, 228, 0.171);
            margin-right: 5px;
            .title{
                font-size: 17px;
                font-weight: 500;
                padding: 15px 0 0px;
            }
            .introduction{
                font-size: 15px;
                color: var(--primary-color);
                padding: 10px 0 0px;
            }
            .tip{
                font-size: 14px;
                padding: 10px 0 10px;
            }
        }
    }
}
</style>