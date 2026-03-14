<template>
  <div class="booking-container">
    <h2>Book Appointment</h2>

    <div class="date-section">
      <input type="date" v-model="date" />
    </div>

    <div class="slots">
      <button
        v-for="slot in slots"
        :key="slot"
        :disabled="isBooked(slot)"
        :class="{ active: time === slot }"
        @click="time = slot"
      >
        {{ slot }}
      </button>
    </div>

    <button class="book-btn" @click="book">Book Appointment</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useAppointmentStore } from '../stores/appointmentStore'
import { useAuthStore } from '../stores/authStore'

const date = ref('')
const time = ref('')

const slots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']

const appointmentStore = useAppointmentStore()
const authStore = useAuthStore()

const isBooked = (slot: string) => {
  return appointmentStore.appointments.some((a) => a.date === date.value && a.time === slot)
}

const book = () => {
  if (!date.value || !time.value) {
    alert("Select date and time")
    return
  }

  if (!authStore.user) {
    alert("Please login first")
    return
  }

  appointmentStore.bookAppointment({
    email: authStore.user.email,
    date: date.value,
    time: time.value
  })

  alert("Appointment booked")
}

</script>

<style scoped>
.booking-container {
  padding: 40px;
}

.date-section {
  margin-top: 20px;
}

.slots {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.slots button {
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  border-radius: 6px;
}

.slots button.active {
  background: #3b82f6;
  color: white;
}

.book-btn {
  margin-top: 30px;
  padding: 12px 20px;
  border: none;
  background: #22c55e;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.book-btn:hover {
  background: #16a34a;
}
</style>
