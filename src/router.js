import { createRouter, createWebHashHistory } from 'vue-router'

import TipBotView from './views/TipBotView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: TipBotView,
      path: '/TipBot'
    }
  ]
})
