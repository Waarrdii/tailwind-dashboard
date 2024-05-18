<template>
<div class="container flex " >
  <div class="bg-gray-300 border min-w-44 box-border h-screen md:max-w-64">
    <div class="flex flex-col h-full">
      <div class=" h-12">Title</div>
      <div class=" bg-cyan-300 flex-1">sidebar</div>
    </div>
  </div>
  <div class="flex-1">
    <div class="flex flex-col h-full">
      <div class=" h-12">
        <Navbar/>
      </div>
      <div class="flex-1  bg-cyan-300 overflow-hidden">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';

</script>


<style scoped>

</style>
