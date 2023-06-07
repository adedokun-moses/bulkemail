import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dash',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mails',
    name: 'mails',
    component: () => import(/* webpackChunkName: "about" */ '../views/mails.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/mailsdet/:id',
    name: 'mailsdet',
    component: () => import(/* webpackChunkName: "about" */ '../views/mailsdet.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/groups',
    name: 'groups',
    component: () => import(/* webpackChunkName: "about" */ '../views/groups.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profiles',
    name: 'profiles',
    component: () => import(/* webpackChunkName: "about" */ '../views/profiles.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !sessionStorage.getItem("token")) {
    sessionStorage.clear()
    return {
      name: "home",
      query: { redirect: to.fullPath },
    }
  }
})

export default router
