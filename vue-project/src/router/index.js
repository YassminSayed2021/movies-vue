import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mview from '../views/Movies/Mview.vue'
import Cview from '../views/Categories/Cview.vue'
import Uview from '../views/Users/Uview.vue'
import Mcreate from '../views/Movies/mcreate.vue'
import Ccreate from '../views/Categories/ccreate.vue'
import Ucreate from '../views/Users/ucreate.vue'
import medit from '../views/Movies/medit.vue'
import cedit from '../views/Categories/cedit.vue' 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      // path: '/movies',
      path:"/",
      name: 'movies',
      component: Mview
    },
    {
      path: '/categories',
      name: 'categories',
      component: Cview
    },{
      path: '/users',
      name: 'users',
      component: Uview
    },
    {
      path: '/movies/Mcreate',
      name: 'moviescreate',
      component: Mcreate
    },
    {
      path: '/categories/ccreate',
      name: 'catcreate',
      component: Ccreate
    },
    {
      path: '/users/ucreate',
      name: 'userscreate',
      component: Ucreate
    },

    {
      path: '/movies/:id/edit',
      name: 'movieedit',
      component: medit
    },
    {
      path: '/categories/:id/edit',
      name: 'catedit',
      component: cedit
    },

    
  ]
})

export default router
