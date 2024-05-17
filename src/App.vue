<template>
  <div class="flex box-border">
    <Sidebar/>
    <div class="flex-1">
      <Navbar/>
      <router-view class="mt-5 mx-auto"></router-view>
    </div>
  </div>  

</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>


<style scoped>

</style>
