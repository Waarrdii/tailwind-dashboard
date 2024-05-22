<template>
    <div class="flex-1 overflow-auto mx-2 my-2 rounded-lg no-scrollbar">
        <table class="w-full table-customers">
            <thead class="
        bg-slate-400
        self-start
        sticky -top-1
        shadow-sm border-y
        border-slate-300">
                <td>No</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Company</td>
                <td>Country</td>
            </thead>
            <tbody>
                <tr v-for="customer, id in dataCustomers" :key="id" class="hover:bg-slate-100 cursor-pointer">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.first }}</td>
                    <td>{{ customer.last }}</td>
                    <td>{{ customer.email }}</td>
                    <td>{{ customer.company }}</td>
                    <td>{{ customer.country }}</td>
                </tr>
            </tbody>
        </table>
    </div>
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

<style lang="scss" scoped>
.table-customers td{
    @apply border-y border-slate-300 px-2;
}
</style>