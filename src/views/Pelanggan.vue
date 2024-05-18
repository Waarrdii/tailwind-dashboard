<template>
    <table>
        <thead 
        class="
        bg-slate-100
        self-start
        sticky -top-1
        shadow-sm border-y
        border-slate-100">
            <td class="border-x border-slate-100 px-2">No</td>
            <td class="border-r border-slate-100 px-2">First Name</td>
            <td class="border-r border-slate-100 px-2">Last Name</td>
            <td class="border-r border-slate-100 px-2">Email</td>
            <td class="border-r border-slate-100 px-2">Company</td>
            <td class="border-r border-slate-100 px-2">Country</td>
        </thead>
        <tbody >
            <tr v-for="customer, id in dataCustomers" :key="id">
                <td class="border-r border-slate-100 px-2">{{ customer.id }}</td>
                <td class="border-r border-slate-100 px-2">{{ customer.first }}</td>
                <td class="border-r border-slate-100 px-2">{{ customer.last }}</td>
                <td class="border-r border-slate-100 px-2">{{ customer.email }}</td>
                <td class="border-r border-slate-100 px-2">{{ customer.company }}</td>
                <td class="border-r border-slate-100 px-2">{{ customer.country }}</td>
            </tr>
        </tbody>
    </table>

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