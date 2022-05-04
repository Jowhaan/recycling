import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'
import TipBotView from './views/TipBotView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/HomeView'
    },
    {
      component: QuizView,
      path: '/QuizView'
    },
    {
      component: TipBotView,
      path: '/TipBot'
    }
  ]
})
