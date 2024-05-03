<template>
  <header  class="flex box-border">
    <Sidebar/>
    <Navbar/>
  </header>

  <!-- <button class="relative flex justify-center items-center group">
    <a class="px-4">Dropdown</a>
    <div class="absolute hidden top-full min-w-full w-max bg-white shadow-md mt-1 rounded group-focus:block">
      <ul class="text-left border rounded">
        <li class="px-4 py-1 hover:bg-gray-100 border-b">menu1</li>
        <li class="px-4 py-1 hover:bg-gray-100 border-b">menu2</li>
        <li class="px-4 py-1 hover:bg-gray-100 border-b">menu3</li>
        <li class="px-4 py-1 hover:bg-gray-100 border-b">menu4</li>
        <li class="px-4 py-1 hover:bg-gray-100 border-b">menu5</li>
      </ul>
    </div>
  </button> -->
    
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

</script>


<style scoped>

</style>
