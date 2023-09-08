<template>
    <div class="houseList" @click="itemClick">
        <div class="item-inner">
            <div class="cover">
                <img 
                :src="itemData.image.url" alt="">
            </div>
            <div class="infos">
                <div class="summary">{{ itemData.summaryText }}</div>
                <div class="name">{{ itemData.houseName }}</div>
                <div class="price">
                    <van-rate 
                    :model-value="Number(itemData.commentScore)"
                    size="13"
                    color="#ffffff"
                    readonly allow-half
                    />
                    <div class="new">{{'￥' + itemData.finalPrice }}</div>
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
const itemClick = () =>{
    router.push('/detail/'+ props.itemData.houseId)
}
</script>

<style lang="less" scoped>
.houseList{
    width: 50%;
    margin-top: 20px;
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
        .infos{
            position: absolute;
            bottom: 0;
            font-size: 12px;
            color: #fff;
            padding: 5px;
            .name{
                text-overflow: ellipsis;
                white-space:normal;

            }
            .price{
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 14px;
                line-height: 1;
            }
        }
    }
}
</style>