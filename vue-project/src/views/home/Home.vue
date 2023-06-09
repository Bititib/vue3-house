<template>
    <div class="home">
        <headerNavTitle />
        <div class="banner">
            <img src="@/assets/images/home/banner.webp" alt="banner">
        </div>
        <homeSearchBox/>
        <homeCategories />

        <div class="search-bar" v-if="isShowSearchBar"> 
            <searchBar />
        </div>

        <homeContent/>
    </div>
</template>

<script setup>
import headerNavTitle from './cpns/header_nav_title.vue'
import homeSearchBox from './cpns/home-search-box.vue'
import homeCategories from './cpns/home-categories.vue'
import homeContent from './cpns/home-content.vue'
import useHomeStore from '@/store/module/home.js'
import userScroll from '@/hooks/useScroll.js'
import {watch ,computed} from 'vue'
import searchBar from '@/components/searchBar/searchBar.vue'
// 发送网络请求
// 1、热门建议
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseList()
// 滚动底部加载
const {isRearchBottom,scrollTop} = userScroll()
watch(isRearchBottom,(newValue) => {
    if(newValue){
        homeStore.fetchHouseList().then(()=>{
            isRearchBottom.value = false
        })
    }
})

// 搜索Contrallo
// 1
// const isShowSearchBar = ref(false) 
// watch(scrollTop,(newTop)=>{
//     isShowSearchBar.value = newTop > 100
// })
// 2 定义的可响应式的数据,依赖另外一个响应式的数据,可以使用计算属性(computed)做优化
const isShowSearchBar = computed(()=>{
    return scrollTop.value > 550
})
</script>

<style lang="less" scoped>
.home{
    padding-bottom: 60px;
    .banner{
        img{
            width: 100%;
        }
    }
    .search-bar{
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        z-index: 2;
        background-color: #fff;
    }
   
}
</style>