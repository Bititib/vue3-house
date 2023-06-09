<template>
    <div class="tarBar">
        
        <template v-for="(item,index) in tabBar">
            <div class="tarBar-item" 
            :class="{active:currentIndex===index}"
             @click="itemClick(index,item)">
                <img v-if="currentIndex !== index" :src="getAssetsURL(item.Image)" alt="">
                <img v-else :src="getAssetsURL(item.activeImage)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
import tabBar from '@/assets/data/tabbar'
import {getAssetsURL} from '@/utils/get_assets_path.js';
import { ref } from 'vue';
import { useRouter} from 'vue-router'
const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index,item) =>{
    currentIndex.value = index
    router.push(item)
}


</script>

<style lang="less" scoped>
.tarBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    box-sizing: border-box;
    border-top: 1px solid #aaa;
    .tarBar-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &.active{
            color:var(--primary-color)
        }
        img{
            width: 2.2rem;
        }
        font-size: .15rem;
    }
}
</style>