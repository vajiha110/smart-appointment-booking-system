<template>
  <div class="admin-dashboard">
    <h2 class="title">🛠 Admin Appointment Panel</h2>

    <div v-if="appointmentStore.appointments.length === 0" class="empty">
      No appointments booked yet 😔
    </div>

    <div class="appointments-container">
      <div class="appointment-card" v-for="(a, i) in appointmentStore.appointments" :key="i">
        <p><span class="label">User:</span> {{ a.email }}</p>
        <p><span class="label">Date:</span> {{ a.date }}</p>
        <p><span class="label">Time:</span> {{ a.time }}</p>

        <button class="cancel-btn" @click="cancel(i)">Cancel Appointment</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppointmentStore } from '../stores/appointmentStore'

const appointmentStore = useAppointmentStore()

const cancel = (index: number) => {
  appointmentStore.cancelAppointment(index)
  alert('Appointment cancelled')
}
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  padding: 50px 20px;
  background: linear-gradient(135deg, #eef2ff, #fdf2f8);
  text-align: center;
}

/* Title */
.title {
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #6366f1, #ec4899);
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
  background: #ffffff;
  border-radius: 16px;
  padding: 22px;
  width: 300px;
  text-align: left;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

/* Hover */
.appointment-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

/* Labels */
.label {
  font-weight: 600;
  color: #4f46e5;
}

/* Button */
.cancel-btn {
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}

/* Empty state */
.empty {
  margin-top: 30px;
  color: #6b7280;
  font-size: 16px;
}
</style>
