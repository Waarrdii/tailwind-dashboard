<template>
    <div class="flex-1 overflow-auto mx-2 my-2 rounded-lg no-scrollbar">
        <table class="w-full table-customers">
            <thead class="
        bg-slate-400
        self-start
        sticky -top-1
        shadow-sm border-y
        border-slate-300
        cursor-pointer
        select-none">
                <td >No</td>
                <td @click="setSortColumn('first')">
                    <div class="flex items-baseline">
                    <span>First Name</span>
                    <span class="triangle-up" v-show="sortColumn === 'first' && ascendingOrder"></span>
                    <span class="triangle-down" v-show="sortColumn === 'first' && !ascendingOrder"></span>
                    </div>
                </td>
                <td @click="setSortColumn('last')">
                    <div class="flex items-baseline">
                    <span>Last Name</span>
                    <span class="triangle-up" v-show="sortColumn === 'last' && ascendingOrder"></span>
                    <span class="triangle-down" v-show="sortColumn === 'last' && !ascendingOrder"></span>
                    </div>
                </td>
                <td @click="setSortColumn('email')">Email</td>
                <td @click="setSortColumn('company')">Company</td>
                <td @click="setSortColumn('country')">Country</td>
            </thead>
            <tbody>
                <tr v-for="customer, id in copyCustomers" :key="id" class="hover:bg-slate-100 cursor-pointer">
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
import { ref, onMounted } from 'vue';

const dataCustomers = ref(null);
const copyCustomers = ref(null);
let ascendingOrder = true;
let sortColumn = "first";

onMounted(async () => {
    try {
        const response = await axios.get('./customers.json');
        dataCustomers.value = response.data;
        copyCustomers.value = dataCustomers.value.slice();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
   sortData();
});

const setSortColumn = (column)=>{
    if (sortColumn === column){
        ascendingOrder = !ascendingOrder;
        // console.log (ascendingOrder);
    }else{
        ascendingOrder = true;
        sortColumn = column;
        // console.log (ascendingOrder);
    }
    sortData();
}
const sortData = ()=>{
        copyCustomers.value.sort((a,b)=>{
            const dataA = a[sortColumn];
            const dataB = b[sortColumn];
            return ascendingOrder ? dataA.localeCompare(dataB) : dataB.localeCompare(dataA);
        })
        }
</script>

<style lang="scss" scoped>
.table-customers td{
    @apply border-y border-slate-300 px-2;
}

.triangle-up {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid black;
    margin-left: 2px;
}

.triangle-down {
    content: "";
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid black;
    margin-left: 2px;
}
</style>