<template>
    <div class="flex relative flex-col h-screen">
            <div class="flex h-12 text-gray-50 bg-cyan-500 w-36 lg:w-44">
                <div class="absolute flex top-4 left-2">
                    <Logo/>
                <span>Dashboard</span>

                </div>
            </div>
            <div class="flex border-r border-slate-200 lg:h-5">
                <div class="w-24 bg-cyan-500 rounded-br-[50%] rounded-bl-[60%]"></div>
                <div class="bg-cyan-500 flex-1">
                    <div class="bg-white w-full h-full rounded-tl-[60%]"></div>
                </div>
            </div>
            <div class="flex flex-1 flex-col border-r border-slate-200 ">
                <div v-for="item in SidebarData" :key="item.id">
                    {{ item.title }}
                </div>
            </div>
    </div>

</template>

<script setup>
import Logo from './icons/Logo.vue';

import { onMounted, ref } from 'vue';
import axios from 'axios';

const SidebarData = ref(null);

onMounted(()=>{
    axios.get('/Sidebar.json')
    .then(function(response){
        SidebarData.value = response.data.sidebarItems
        console.log(SidebarData.value)
    })
    .catch(function (error) {
            // handle error
            console.log(error);
        })
})

</script>

<style lang="scss" scoped>
</style>