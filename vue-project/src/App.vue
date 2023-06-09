<template>
  <RouterView />
  <Tarbar v-if="!route.meta.isAuth" />
  <Loading />
</template>

<script setup>
import { useRoute } from 'vue-router';
import Tarbar from './components/tarBar/tarbar.vue';
import Loading from './views/loading/loading.vue';
const route = useRoute()
</script>


<style scoped>

</style>
