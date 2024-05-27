<template>
    <form class="bg-slate-100 rounded-lg flex items-center">
        <label class="flex justify-betwen items-center px-2 relative">
            <img class="absolute right-6" src="/icons/search.svg" alt="search user">
            <input class="m-2 rounded-md border border-slate-200 shadow-sm" type="text" name="" id=""
                placeholder="Search User">
        </label>
        <vue-tailwind-datepicker :formatter="formatter" v-model="dateValue" placeholder="Filter Tanggal" />
    </form>
</template>

<script setup>
import { ref } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";

const dateValue = ref([]);
const formatter = ref({
    date: 'DD MMM YYYY',
    month: 'MMM',
})

</script>

<style lang="scss" scoped></style>