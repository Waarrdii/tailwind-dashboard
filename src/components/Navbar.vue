<template>
    <nav class="bg-slate-50 shadow max-h-14 flex-1">
        <div class="text-gray-700 h-full mx-0 capitalize hidden lg:flex">
            <Dropdown :options="options" :menu-list="menuList" />
            <!-- mobile view -->
            <div class="lg:hidden flex items-center">
                <button class="mobile-menu-button">
                    <LogoMenu />
                </button>
            </div>

        </div>
    </nav>
</template>

<script setup>
import LogoMenu from './icons/LogoMenu.vue';
import Dropdown from './navigations/Dropdown.vue';
const options = [1, 2, 3, 4, 5];
const menuList = ['Menu', 'Master Data', 'modul utama', 'import transaksi', 'laporan', 'pengaturan']

</script>

<style scoped>

</style>
