import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue';
import LaporanKeuangan from '../views/LaporanKeuangan.vue';
import BukuBesar from '../views/BukuBesar.vue';
import LaporanPembelian from '../views/LaporanPembelian.vue';
import LaporanPenjualan from '../views/LaporanPenjualan.vue';
import Piutang from '../views/Piutang.vue';

const routes = [
  { path: '/', component: Home },
  {path: '/laporan-keuangan', component: LaporanKeuangan},
  {path: '/buku-besar', component: BukuBesar},
  {path: '/pembelian', component: LaporanPembelian},
  {path: '/penjualan', component: LaporanPenjualan},
  {path: '/buku-pembantu-piutang', component: Piutang},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;