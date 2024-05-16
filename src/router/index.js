import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Pelanggan from '../views/Pelanggan.vue';

const routes = [
  { path: '/', component: Home },
  {path: '/pelanggan', component:Pelanggan}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;