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
            <div class="flex flex-1 border-r border-slate-200 ">
            </div>
    </div>

</template>

<script setup>
import Logo from './icons/Logo.vue';

</script>

<style lang="scss" scoped>
</style>