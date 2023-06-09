<template>
    <div class="loading"
    @click="clickLoading"
    v-if="isLoading"
    >
        <div class="loading-gif">
            <img src="@/assets/images/home/full-screen-loading.gif" alt="">
        </div>
  </div>
</template>

<script setup>
import {useMainStore} from'@/store/module/mian.js'
import { storeToRefs } from 'pinia';
const mianStore = useMainStore()
const {isLoading}  = storeToRefs(mianStore)
const clickLoading = () => {
    mianStore.isLoading = false
}

</script>

<style lang="less" scoped>
.loading{
  position: fixed;
  z-index: 999;
  top:0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000052;
  .loading-gif{
    width: 104px;
    height: 93px;
    background: url(@/assets/images/home/loading-bg.png);
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 78px;

    }
  }
}
</style>