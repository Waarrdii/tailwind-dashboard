<template>
    <div class="flex flex-1 items-center cursor-pointer">
        <div class="px-3 select-none hover:shrink-0 hover:text-gray-950" v-for="(menu, index) in menuList" :key="index">
            <span @click="showList(index)">{{ menu }}</span>
            <div class="absolute" :class="{ hidden: !hide[index] }">
                <div @click="close" class="" v-for="(option, index) in options" :key="index">
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
//   console.log(hide.value);
}

function close(){
    hide.value.fill(false);
    // console.log(hide.value);
}

</script>

<style scoped>

</style>