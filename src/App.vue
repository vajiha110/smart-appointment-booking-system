<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from './stores/authStore'
import Navbar from './components/Navbar.vue'
import { useAppointmentStore } from './stores/appointmentStore'

const appointmentStore = useAppointmentStore()

onMounted(() => {
  authStore.loadUser()
  appointmentStore.loadAppointments()
})

const authStore = useAuthStore()

onMounted(() => {
  authStore.loadUser()
})
</script>

<template>
  <Navbar />
  <router-view />
</template>
