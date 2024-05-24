<template>
<div class="flex max-h-screen max-w-screen" >
  <div class="min-w-44 box-border h-screen md:max-w-64">
    <div class="flex flex-col h-full">
      <div class="flex-1">
        <sidebar/>
      </div>
    </div>
  </div>
  <div class="flex-1 overflow-hidden">
    <div class="flex flex-col h-full">
        <Navbar/>
        <router-view/>
    </div>
  </div>
</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue'

</script>


<style scoped>

</style>
