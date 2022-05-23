import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'
import SearchBar from './components/SearchBar.vue'
import TipView from './views/TipView.vue'
import UserView from './views/UserView.vue'
import UserPage from './components/UserPage.vue'
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: UserPage,
      path: '/userPage'
    },

    {
      component: SearchBar,
      path: '/search'
    },
    {
      component: QuizView,
      path: '/quiz'
    },
    /*{
      component: NavBar,
      path: '/nav'
    },*/
    {
      component: TipView,
      path: '/tip/:tipNum?'
    },

    {
      component: UserView,
      path: '/user'
    }
  ]
})
