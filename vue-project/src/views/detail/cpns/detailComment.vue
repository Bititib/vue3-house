<template>
    <div class="comment">
        <detailSection :headerText="'超级热评'" :moreText="'查看更多评论'">
            <div class="comment">
                <div class="header">
                    <div class="left">
                        <div class="over"> {{ commentData.over }} </div>
                        <div class="desc">
                            <div class="title">{{ commentData.scoreTitle }}</div>
                            <div class="tips">{{ commentData.totalCount }} 条评论</div>
                        </div>
                    </div>
                    <div class="right">

                    </div>
                </div>
                <div class="tags"></div>
                <div class="user"></div>
            </div>
        </detailSection>
    </div>
</template>

<script setup>
import detailSection from '@/components/detail-section/detailSection.vue';

let props = defineProps({
    commentData:{
        type:Object,
        default:()=>({}),
    }
})
console.log(props.commentData);
</script>

<style lang="less" scoped>

</style>