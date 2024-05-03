<template>
  <header class="flex box-border">
    <div v-for="(item, index) in menuList" :key="index">
      {{ item }}
    </div>
  </header>   
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import navbarData from './Navbar.json'

const menuList = ref(null);

onMounted(() => {
  menuList.value = navbarData; // Menggunakan data yang diimpor
  console.log(menuList.value);
});

</script>


<style scoped>

</style>
