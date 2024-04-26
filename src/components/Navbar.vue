<template>
    <nav class="bg-sky-100">
        <div class="max-w-6xl flex justify-between py-4 px-4">
            <div class="flex">
                <div>
                    <a href="#" class="flex mx-4 nav-link">
                        <Logo />
                        <span class="font-bold">My Agent</span>
                    </a>
                </div>

                <div class="space-x-4 hidden md:flex">
                    <a href="#" class="nav-link">account data</a>
                    <a href="#" class="nav-link">Purchases</a>
                    <a href="#" class="nav-link">Sales</a>
                    <a href="#" class="nav-link">Inventory</a>
                    <a href="#" class="nav-link">Activa</a>
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
import { defineComponent } from 'vue';
import LogoMenu from './icons/LogoMenu.vue';


defineComponent({
    name: 'Navbar',
    components: {
        Logo, LogoMenu
    }
})

</script>

<style scoped>
.nav-link {
    @apply text-gray-700 capitalize hover:text-gray-900;
}
</style>
