<template>
    <div class="detailInfo">
        <h6 class="houseName">
            {{ houseInfo.houseName }}
        </h6>
        <div class="tags">
            <template v-for="(item,index) in houseInfo.houseTags" :key="index">
                <span class="tag" v-if="item.tagText"
                :style="{
                    'background-color':item.tagText.background.color,
                    'color':item.tagText.color}"
                >
                {{ item.tagText.text}}
            </span>
            </template>
        </div>

        <div class="comment flex-text">
            <div class="left">
                <span class="scope">
                    {{ houseInfo.commentBrief.overall }}
                </span>
                <span class="title">
                    {{ houseInfo.commentBrief.scoreTitle }}
                </span>
                <span class="brief">
                    {{ houseInfo.commentBrief.commentBrief }}
                </span>
            </div>
            <div class="right">
               <span class="count">  {{ houseInfo.commentBrief.totalCount }}条评论 &gt;</span>
               
            </div>
        </div>

        <div class="location flex-text">
            <div class="left">
                <span class="address">{{ houseInfo.nearByPosition.address }}</span>
            </div>
            <div class="right">
                地图·周边 &gt;
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    houseInfo:{
        type:Object,
        default:()=>({}),
    }
})

</script>

<style lang="less" scoped>
.detailInfo{
    .houseName{
        font-size: 20px;
    }
    .tags{
        margin: 10px 0;
        display: flex;
        flex-wrap: wrap;
        .tag{
            padding: 2px;
            font-size: 12px;
            border-radius: 3px;
            margin-right: 2px;
            line-height: 1;
        }
    }
    .flex-text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        line-height: 1;
        background-color: #cccccc3a;
        border-radius: 10px;
        .left{
            font-size: 14px;
            .scope{
                font-size: 18px;
            }
            .title{
                font-size: 14px;
                margin-left: 5px;
            }
            .brief{
                font-size: 12px;
                margin-left: 5px;
            }
        }
        .right{
            font-size: 14px;
            padding-right: 2px;
            color: var(--primary-color);
        }
    }
    .location{
        margin-top: 10px;
    }

}
</style>