import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue';

import Pelanggan from '../views/Pelanggan.vue';
import Pemasok from '../views/Pemasok.vue';
import Departemen from '../views/Departemen.vue';
import SyaratPembayaran from '../views/SyaratPembayaran.vue';

import LaporanKeuangan from '../views/LaporanKeuangan.vue';
import BukuBesar from '../views/BukuBesar.vue';
import LaporanPembelian from '../views/LaporanPembelian.vue';
import LaporanPenjualan from '../views/LaporanPenjualan.vue';
import Piutang from '../views/Piutang.vue';
import Utang from '../views/Utang.vue';
import Persediaan from '../views/Persediaan.vue';
import AktivaTetap from '../views/AktivaTetap.vue';
import LaporanDepartment from '../views/LaporanDepartment.vue';
import Pajak from '../views/Pajak.vue';
import LaporanTersimpan from '../views/LaporanTersimpan.vue';

const routes = [
  { path: '/', component: Home },

  {path:'/pelanggan', component: Pelanggan},
  {path:'/pemasok', component: Pemasok},
  {path:'/departemen', component: Departemen},
  {path:'/syarat-pembayaran', component: SyaratPembayaran},

  {path: '/laporan-keuangan', component: LaporanKeuangan},
  {path: '/buku-besar', component: BukuBesar},
  {path: '/pembelian', component: LaporanPembelian},
  {path: '/penjualan', component: LaporanPenjualan},
  {path: '/buku-pembantu-piutang', component: Piutang},
  {path: '/buku-pembantu-utang', component: Utang},
  {path: '/persediaan', component: Persediaan},
  {path: '/aktiva-tetap', component: AktivaTetap},
  {path: '/laporan-departemen', component: LaporanDepartment},
  {path: '/pajak', component: Pajak},
  {path: '/laporan-tersimpan', component: LaporanTersimpan},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;