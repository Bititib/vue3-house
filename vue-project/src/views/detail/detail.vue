<template>
    <div class="detail top-page">
        <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <!-- 轮播图 -->
        <div class="swipe" v-if="mainPart">
            <detailSwipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
        </div>
        
        <!-- 内容 -->
        <div class="content" v-if="mainPart">
            <detailInfos :house-info="mainPart.topModule" />
            <detailFacility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
            <detailLandlord :landlord="mainPart.dynamicModule.landlordModule"/>
            <detailComment :comment-data="mainPart.dynamicModule.commentModule"/>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import  { getDetailInfos } from '@/services'
import { computed, ref } from 'vue';
import detailSwipe from './cpns/detailSwipe.vue';
import detailInfos from './cpns/detailInfos.vue';
import detailFacility from './cpns/detailFacility.vue';
import detailLandlord from './cpns/detailLandlord.vue';
import detailComment from './cpns/detailComment.vue';

const route = useRoute();
const router = useRouter(); 

const detailData = ref({});
const mainPart = computed(() => detailData.value.mainPart);

getDetailInfos(route.params.id).then(res => detailData.value = res.data)

const onClickLeft = () => { 
    router.back()
}
console.log(mainPart);
</script>

<style lang="less" scoped>
.detail{
    .content{
        padding: 16px;
    }
}
</style>