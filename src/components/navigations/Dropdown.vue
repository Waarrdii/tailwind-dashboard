<template>
    <div class="flex items-center">
        <div @click="showList(id),  $event"  class="px-3 select-none cursor-pointer" v-for="(item, id) in dataItem" :key="id">
            <nav>{{ item.title }}</nav>
            <div :class="{'hidden' : !item.status}" class="absolute mt-2 bg-slate-50 rounded shadow-md border ">
                <div class="px-4 py-1 hover:bg-slate-100" v-for="(option, index) in item.list">
                   <a class="text-gray-700" href="#">{{ option }}</a> 
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'



const dataItem = ref();

onMounted(() => {
    //mengambil data json.
    axios.get('/Navbar.json') 
        .then(function (response) {
            dataItem.value = response.data.navbarItems;
            //console.log(dataItem.value);


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        //menutup semua dropdown list yang terbuka ketika ada di clik diluar navbar
        document.body.addEventListener('click',closeAllMenus);
})

//menghapus event listener ketika compononet tidak di pasang, agar tidak terjadi error.
onUnmounted(()=>{
    document.body.removeEventListener('click',closeAllMenus);
})

function showList(id){
    event.stopPropagation(); //script ini untuk mencegah event click mencapai body element.
    dataItem.value.forEach((item, index) => {
        if(index === id) {
            item.status = !item.status;
        } else {
            item.status = false;
        }
    });
}
//fungsi untuk menutup semua dropdown list
function closeAllMenus(){
    dataItem.value.forEach(item =>{
        item.status = false;
    })
}
</script>

<style scoped></style>