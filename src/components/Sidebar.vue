<template>
    <div class="flex flex-col h-screen">
            <div class="flex h-12 text-gray-50 bg-cyan-500 w-40">
                <Logo/>
                <span>Dashboard</span>
            </div>
            <div class="flex-1 bg-slate-100 ">
                <div class="h-14 relative overflow-hidden">
                    <div class="bg-slate-100">
                        <div class="absolute -left-[10px] -top-12 h-24 w-24 rounded-full bg-cyan-500"></div>
                    </div>
                    <div class="bg-cyan-500 absolute -right-5">
                        <div class=" h-24 w-24 rounded-l-2xl bg-slate-100"></div>
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