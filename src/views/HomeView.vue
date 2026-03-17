<template>
  <div class="home">
    <div class="card">
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
  min-height: 100vh;
  padding: 50px 20px;
  background: linear-gradient(135deg, #fdf2f8, #e0f2fe); /* soft pink + blue */
}

.home h1 {
  font-size: 42px;
  font-weight: bold;
  background: black;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  margin-top: 12px;
  color: #6b7280; /* softer gray */
  font-size: 18px;
}

.buttons {
  margin-top: 25px;
}

.primary {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 8px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
}

.secondary {
  background: #f9fafb;
  border: 1px solid #d1d5db;
  padding: 12px 22px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.secondary:hover {
  background: #eef2ff;
  border-color: #3b82f6;
  color: #3b82f6;
}

.features {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
}

.feature-card {
  border: 1px solid #e5e7eb;
  padding: 25px;
  border-radius: 14px;
  width: 220px;
  background: white;
  transition: all 0.3s ease;
}

.feature-card h3 {
  color: #3b82f6;
  margin-bottom: 10px;
}

.feature-card p {
  color: #6b7280;
  font-size: 14px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.logout-btn {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  transition: 0.3s;
}

.logout-btn:hover {
  transform: scale(1.05);
}
</style>
