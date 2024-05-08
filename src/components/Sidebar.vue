<template>
    <div class="flex flex-col h-screen">
            <div class="flex h-12 text-gray-50 bg-cyan-500 w-36">
                <Logo/>
                <span>Dashboard</span>
            </div>
            <div class="flex-1 bg-slate-100 ">
                <div class="h-14 relative overflow-hidden">
                    <div class="bg-slate-100">
                        <div class="absolute bg-cyan-500 w-[100px] h-11 rounded-br-lg"></div>
                    </div>
                    <div class="bg-cyan-500 absolute -right-5">
                        <div class=" h-24 w-16 rounded-l-[40px] bg-slate-100"></div>
                    </div>
                    
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