<template>
    <div class="flex flex-col h-screen">
            <div class="flex h-28 text-gray-50 bg-cyan-500 w-44">
                <Logo/>
                <span>Dashboard</span>
            </div>
            <div class="flex-1 bg-slate-100">
                <div class=" w-44 h-24 flex -translate-y-5">
                    <div class="h-40 -translate-y-20 -translate-x-10 w-40 bg-cyan-500  rounded-full">1</div>
                    <div class="">2</div>
                </div>
                <div class="bg-blue-100">sidebar</div>
            </div>
    </div>

</template>

<script setup>
import Logo from './icons/Logo.vue';

</script>

<style lang="scss" scoped>
</style>