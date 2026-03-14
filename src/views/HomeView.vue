<template>
  <div class="home">
    <h1>Smart Appointment Booking System</h1>

    <p class="subtitle">Book appointments quickly and manage schedules easily.</p>

    <div class="buttons">
      <!-- Not logged in -->
      <template v-if="!authStore.user">
        <router-link to="/register">
          <button class="primary">Get Started</button>
        </router-link>

        <router-link to="/login">
          <button class="secondary">Login</button>
        </router-link>
      </template>

      <!-- Logged in USER -->
      <template v-else-if="authStore.user.role === 'user'">
        <router-link to="/dashboard">
          <button class="primary">Go to Dashboard</button>
        </router-link>

        <button class="logout-btn" @click="logout">Logout</button>
      </template>

      <!-- Logged in ADMIN -->
      <template v-else>
        <router-link to="/admin">
          <button class="primary">Go to Admin Dashboard</button>
        </router-link>

        <button class="logout-btn" @click="logout">Logout</button>
      </template>
    </div>

    <div class="features">
      <div class="feature-card">
        <h3>Easy Booking</h3>
        <p>Select date and time slots easily.</p>
      </div>

      <div class="feature-card">
        <h3>Dashboard</h3>
        <p>Track all your appointments in one place.</p>
      </div>

      <div class="feature-card">
        <h3>Admin Control</h3>
        <p>Admins can manage and cancel bookings.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push('/')
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 60px;
}

.subtitle {
  margin-top: 10px;
  color: #555;
}

.buttons {
  margin-top: 25px;
}

.primary {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
}

.secondary {
  background: white;
  border: 1px solid #ccc;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

.feature-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  margin-left: 10px;
  cursor: pointer;
}

.logout-btn:hover {
  background: #dc2626;
}
</style>
