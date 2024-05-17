<template>
    <div>
        <table class="table-fixed border border-gray-300 rounded-lg mx-auto">
        <thead class="bg-slate-50">
            <tr>
                <th class="border border-r-gray-300  px-2">No</th>
                <th class="border border-r-gray-300  px-2">First Name</th>
                <th class="border border-r-gray-300  px-2">Last Name</th>
                <th class="border border-r-gray-300  px-2">Email</th>
                <th class="border border-r-gray-300  px-2">Company</th>
                <th class="border border-r-gray-300  px-2">Country</th>
            </tr>
        </thead>
        <tbody class="">
            <tr v-for="customer, id in displayItems" :key="id" class="border border-b-gray-300">
                <td class="border border-r-gray-300 px-2">
                    {{ customer.id }}
                </td>
                <td class="border border-r-gray-300  px-2">
                    {{ customer.first }}
                </td>
                <td class="border border-r-gray-300  px-2">
                    {{ customer.last }}
                </td>
                <td class="border border-r-gray-300  px-2">
                    {{ customer.email }}
                </td>
                <td class="border border-r-gray-300  px-2 ">
                    {{ customer.company }}
                </td>
                <td class=" px-2">
                    {{ customer.country }}
                </td>
            </tr>
        </tbody>
    </table>

    <div class="flex justify-center">
        <button 
        v-for="page, i in totalPages"
        :key="i"
        @click.prevent="goToPage(page)"
        class="mt-4 mx-1 text-gray-50 rounded-full w-8 h-8 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
        {{ page }}
    </button>
    </div>
    
    </div>
    

<!-- Pagination -->

</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';

const dataCustomers = ref(null)
const currentPage = ref(0)
const itemsPerPage = ref(10)
let totalPages = ref(0)

onMounted(async () => {
    try {
        const response = await axios.get('./customers.json');
        dataCustomers.value = response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    totalPages = computed(() => {
        return Math.ceil(dataCustomers.value.length / itemsPerPage.value);
    });
    

});

const displayItems = computed(() => {
    if (dataCustomers.value) {
        return dataCustomers.value.slice(
            currentPage.value * itemsPerPage.value,
            (currentPage.value * itemsPerPage.value) + itemsPerPage.value
        );
    }
})

const goToPage = (page)=> {
  currentPage.value = page - 1; // Convert to 0-based index
}

</script>

<style lang="scss" scoped></style>