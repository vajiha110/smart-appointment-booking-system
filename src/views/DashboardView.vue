<template>
  <div class="dashboard">
    <h2 class="title">📅 Your Appointments</h2>
    <p v-if="myAppointments.length === 0" class="empty">No appointments yet 😔</p>

    <div class="appointments-container">
      <div class="appointment-card" v-for="(a, i) in myAppointments" :key="i">
        <p class="date">{{ a.date }}</p>
        <p class="time">{{ a.time }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppointmentStore } from '../stores/appointmentStore'
import { useAuthStore } from '../stores/authStore'

const appointmentStore = useAppointmentStore()
const authStore = useAuthStore()

const myAppointments = computed(() => {
  if (!authStore.user) return []

  return appointmentStore.appointments.filter((a) => a.email === authStore.user.email)
})
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  padding: 50px 20px;
  background: linear-gradient(135deg, #fdf2f8, #e0f2fe); /* soft pink + blue */
  text-align: center;
}

/* Title */
.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #ec4899, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Container */
.appointments-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

/* Card */
.appointment-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  width: 260px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: left;
}

/* Hover effect */
.appointment-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

/* Text styling */
.date {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}

.time {
  font-size: 14px;
  color: #6b7280;
  margin-top: 5px;
}

.empty {
  color: #9ca3af;
  font-size: 18px;
  margin-top: 20px;
}
</style>
