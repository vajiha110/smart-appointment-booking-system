import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<any>(null)

  const login = (email: string) => {
    if (email === 'admin@gmail.com') {
      user.value = { email, role: 'admin' }
    } else {
      user.value = { email, role: 'user' }
    }

    localStorage.setItem('user', JSON.stringify(user.value))
  }

  const loadUser = () => {
    const stored = localStorage.getItem('user')

    if (stored) {
      user.value = JSON.parse(stored)
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('user')
  }

  return { user, login, logout, loadUser }
})
