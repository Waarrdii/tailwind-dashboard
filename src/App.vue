<template>
  <header class="flex box-border">
    <div class="mx-3 w-24 h-24 border " v-for="(item, id) in dataItem" :key="id">
   {{ item.title }}
   <div v-for="(i,index) in item.list" :key="index">
    {{ i }}</div>
    </div>
    
  </header>   
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'


const dataItem = ref();

onMounted(()=>{
  axios.get('../public/Navbar.json')
  .then(function (response) {
    dataItem.value = response.data.navbarItems;
    console.log(dataItem.value);
   
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
})

</script>


<style scoped>

</style>
