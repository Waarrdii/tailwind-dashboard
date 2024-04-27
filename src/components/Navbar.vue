<template>
    <nav class="bg-sky-100">
        <div class="flex py-4 px-4">
            <div class="flex items-center justify-between">
                <div>
                    <a href="#" class="flex nav-link mx-4">
                        <Logo />
                        <span class="font-bold">My Agent</span>
                    </a>
                </div>
                
                <div class="nav-link hidden md:flex mx-8">
                    <Dropdown :options="options" :menu-list="menuList" />
                </div>
            </div>

            <!-- mobile view -->
            <div class="md:hidden flex items-center">
                <button class="mobile-menu-button">
                    <LogoMenu />
                </button>
            </div>

        </div>
    </nav>
</template>

<script setup>
import Logo from './icons/Logo.vue'
import LogoMenu from './icons/LogoMenu.vue';
import Dropdown from './navigations/Dropdown.vue';


const options = [1, 2, 3, 4, 5];
const menuList = ['Menu', 'Master Data', 'modul utama', 'import transaksi', 'laporan', 'pengaturan']

</script>

<style scoped>
.nav-link {
    @apply text-gray-700 capitalize hover:text-gray-900;
}
</style>
