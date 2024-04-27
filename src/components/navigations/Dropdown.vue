<template>
    <div class="dropdown-wrapper space-x-5">
        <div v-for="(menu, index) in menuList" :key="index">
            <span @click="showList(index)">{{ menu }}</span>
            <div class="option-wrapper " :class="{ hidden: !hide[index] }">
                <div @click="close" class="option" v-for="(option, index) in options" :key="index">
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
.dropdown-wrapper {
    @apply flex items-center justify-between cursor-pointer my-1 mx-auto;
}

.option-wrapper {
    @apply cursor-pointer max-w-52 my-0 mx-auto absolute shadow-sm border border-zinc-300 box-border rounded-lg ;
}


.option {
    @apply p-4 border-b border-zinc-300 hover:bg-slate-300;
}
</style>