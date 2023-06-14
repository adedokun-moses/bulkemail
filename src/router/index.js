import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'

const routes = [
  {
    path: '/index',
    name: 'login',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
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
  },
  {
    path: '/messages/:id',
    name: 'messages',
    component: () => import(/* webpackChunkName: "about" */ '../views/messages.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/unsub',
    name: 'unsubscribe',
    component: () => import(/* webpackChunkName: "about" */ '../views/unsub.vue'),
    meta: { requiresAuth: true }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  if(to.meta.requiresAuth && !sessionStorage.getItem("token")){
      sessionStorage.clear()
      return{
          name:"login",
          query:{redirect:to.fullPath},
      }
  }
})

export default router
