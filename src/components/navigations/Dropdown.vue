<template>
    <div @mouseleave="close" class="flex items-center">
        <div @mouseenter="showList(index)" class="px-3 select-none hover:shrink-0 hover:text-gray-950  cursor-pointer" v-for="(menu, index) in menuList" :key="index">
            <span >{{ menu }}</span>
            <div id="menu-list" class="absolute bg-slate-100 rounded shadow-sm" :class="{ hidden: !hide[index] }">
                <div @click="close" class="my-1 hover:bg-slate-200" v-for="(option, index) in options" :key="index">
                    {{ option }}  
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps, ref } from 'vue'

const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    menuList: {
        type: Array,
        required: true,
    }
})
const hide = ref(new Array(props.menuList.length).fill(false))

function showList(index) {
  hide.value = hide.value.map((value, i) => (i === index ? !value : false));
  console.log(hide.value)
}

function close(){
    hide.value.fill(false)
}
</script>

<style scoped>

</style>