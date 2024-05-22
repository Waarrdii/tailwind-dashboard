<template>
    <div class=" h-12">
        <nav class="bg-slate-700 text-gray-50 shadow h-12">
            <div class=" h-full mx-0 capitalize hidden sm:flex">
                <Dropdown />
                <!-- mobile view -->
                <div class="sm:hidden flex items-center">
                    <button class="mobile-menu-button">
                        <LogoMenu />
                    </button>
                </div>

            </div>
        </nav>
    </div>
</template>

<script setup>
import LogoMenu from './icons/LogoMenu.vue';
import Dropdown from './navigations/Dropdown.vue';



</script>

<style scoped></style>
