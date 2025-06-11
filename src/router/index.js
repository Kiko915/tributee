import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Dashboard from '../views/Dashboard.vue'
import { supabase } from '@/lib/supabase'
import { useLoaderStore } from '@/stores/loader'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login' },
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: { title: 'Sign Up' },
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true, title: 'Dashboard' },
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const loader = useLoaderStore()
  loader.show()

  const defaultTitle = 'Tributee';
  document.title = to.meta.title ? `${to.meta.title} | ${defaultTitle}` : defaultTitle;

  const { data: { session } } = await supabase.auth.getSession()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !session) {
    next('/login')
  } else if ((to.name === 'login' || to.name === 'signup') && session) {
    next('/dashboard')
  } else {
    next()
  }
})

router.afterEach(() => {
  const loader = useLoaderStore()
  loader.hide()
})

export default router
