import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'
import TipBotView from './views/TipBotView.vue'
import SearchView from './views/SearchView.vue'

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
      component: SearchView,
      path: '/SearchView'
    },
    {
      component: TipBotView,
      path: '/TipBot'
    }
  ]
})
