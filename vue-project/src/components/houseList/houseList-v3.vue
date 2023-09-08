<template>
    <div class="houseList" @click="itemClick">
        <div class="item-inner">
            <div class="cover">
                <img 
                :src="itemData.image.url" alt="">
            </div>
            <div class="location">
                <img src="@/assets/images/home/location.png" alt="">
                <span>{{ itemData.location }}</span>
            </div>
            <div class="infos">
                <div class="name">{{ itemData.houseName }}</div>
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="price">
                    <div class="new">{{ '￥' + itemData.finalPrice }}</div>
                    <div class="old">{{ '￥' + itemData.productPrice }}</div>
                    <van-tag round color="#ff9a54">{{ itemData?.priceTipBadge?.text }}</van-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

let props = defineProps({
    itemData:{
        type:Object,
        default:()=>[]
    }
});

const router = useRouter()
const itemClick = () => {
    router.push('/detail/'+ props.itemData.houseId)
}

</script>

<style lang="less" scoped>
.houseList{
    margin-top: 20px;
    width: 50%;
    .item-inner{
        position: relative;
        margin: 0 3px;
        .cover{
            width: 100%;
            img{
                width: 100%;
                display: block;
                border-radius: 8px;
            }
        }
        .location{
            display: flex;
            justify-content:start;
            align-items: center;
            height: 20px;
            line-height: 20px;
            img{
                width: 14px;
            }
            span{
                font-size: 12px;
            }
        }
        .infos{
            font-size: 12px;
            color: #333;
            padding: 5px;
            .name{
                text-overflow: ellipsis;
                white-space:normal;
            }
            .summary{
                height: 20px;
                line-height: 20px;
            }
            .price{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                .new{
                    font-size: 14px;color: var(--primary-color);
                }
                .old{
                    text-decoration:line-through;
                }
            }
        }
    }
}
</style>