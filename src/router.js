import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'
import TipBotView from './views/TipBotView.vue'
import SearchView from './views/SearchView.vue'
import TipView from './views/TipView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/home'
    },

    {
      component: SearchView,
      path: '/search'

    },
    {
      component: QuizView,
      path: '/quiz'
    },
    {
      component: TipView,
      path: '/tip'

    },
    {
      component: TipBotView,
      path: '/tipbot'
    }
  ]
})
