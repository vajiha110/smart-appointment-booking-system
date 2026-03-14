<template>
  <div class="dashboard">
    <h2>Your Appointments</h2>

    <div class="appointment-card" v-for="(a, i) in myAppointments" :key="i">
      <p>{{ a.date }} - {{ a.time }}</p>
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

  return appointmentStore.appointments.filter(
    (a) => a.email === authStore.user.email
  )
})

</script>

<style scoped>
.dashboard {
  padding: 40px;
}

.appointment-card {
  background: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 15px;
  border-radius: 8px;
  width: 300px;
}
</style>
