import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import BookAppointmentView from '../views/BookAppointmentView.vue'
import AdminDashboardView from '../views/AdminDashboardView.vue'
import { useAuthStore } from '../stores/authStore'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/dashboard', component: DashboardView },
    { path: '/book', component: BookAppointmentView },
    { path: '/admin', component: AdminDashboardView },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.path === '/admin' && authStore.user?.role !== 'admin') {
    alert('Access denied')
    next('/login')
  } else {
    next()
  }
})

export default router
