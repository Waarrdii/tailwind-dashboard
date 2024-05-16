<template>
  <div class="flex box-border">
    <Sidebar/>
    <div class="flex-1">
      <Navbar/>
      <div class="">
        <router-link to="/about">about</router-link> |
        <router-link to="/">home</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>  

</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>


<style scoped>

</style>
