<template>
  <div class="container">
    <div class="login-card">
      <h2>Login</h2>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Enter your password" required />
        </div>

        <button type="submit">Login</button>

        <p class="register-text">
          Don't have an account?
          <router-link to="/register">Register</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const email = ref('')
const password = ref('')

const router = useRouter()
const authStore = useAuthStore()

const handleLogin = () => {
  if (!email.value || !password.value) {
    alert('Please fill all fields')
    return
  }

  authStore.login(email.value)

  if (authStore.user?.role === 'admin') {
    router.push('/admin')
  } else {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(120deg, #667eea, #764ba2);
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #2563eb;
}

.register-text {
  margin-top: 15px;
  text-align: center;
}
</style>
