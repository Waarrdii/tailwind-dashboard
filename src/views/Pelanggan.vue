<template>
    <div class="flex">
        <div class="mx-auto border rounded-md px-4 py-2">
        <header class="flex h-8 items-center shadow-sm border-b border-gray-300">
            <div class="w-8">No</div>
            <div class="w-24">First Name</div>
            <div class="w-24">Last Name</div>
            <div class="w-80">Email</div>
            <div class="w-80">Company</div>
            <div class="w-80">Country</div>
        </header>
        <main class="h-80 overflow-y-scroll no-scrollbar">
            <div class="flex" v-for="customer, id in dataCustomers" :key="id">
                <div class="w-8 border-b border-gray-300">
                    {{ customer.id }}
                </div>
                <div class="w-24 border-b border-gray-300">
                    {{ customer.first }}
                </div>
                <div class="w-24 border-b border-gray-300">
                    {{ customer.last }}
                </div>
                <div class="w-80 border-b border-gray-300">
                    {{ customer.email }}
                </div>
                <div class="w-80 border-b border-gray-300">
                    {{ customer.company }}
                </div>
                <div class="w-80 border-b border-gray-300">
                    {{ customer.country }}
                </div>
            </div>
        </main>
    </div>
    </div>




    <!-- Pagination -->

</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const dataCustomers = ref(null)

onMounted(async () => {
    try {
        const response = await axios.get('./customers.json');
        dataCustomers.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }


});

</script>

<style lang="scss" scoped></style>