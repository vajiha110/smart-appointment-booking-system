<template>
  <div class="admin-dashboard">
    <h2>Admin Appointment Panel</h2>

    <div class="appointment-card" v-for="(a, i) in appointmentStore.appointments" :key="i">
      <p><strong>User:</strong> {{ a.email }}</p>
      <p><strong>Date:</strong> {{ a.date }}</p>
      <p><strong>Time:</strong> {{ a.time }}</p>

      <button class="cancel-btn" @click="cancel(i)">Cancel Appointment</button>
    </div>

    <p v-if="appointmentStore.appointments.length === 0">No appointments booked yet.</p>
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
  padding: 40px;
}

.appointment-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 15px;
  border-radius: 8px;
  width: 320px;
}

.cancel-btn {
  margin-top: 10px;
  padding: 8px 12px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.cancel-btn:hover {
  background: #dc2626;
}
</style>
