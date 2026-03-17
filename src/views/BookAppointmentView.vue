<template>
  <div class="booking-container">
    <div class="booking-card">
      <h2 class="title">📅 Book Appointment</h2>

      <!-- Date -->
      <div class="date-section">
        <label>Select Date</label>
        <input type="date" v-model="date" />
      </div>

      <!-- Slots -->
      <div class="slots">
        <button
          v-for="slot in slots"
          :key="slot"
          :disabled="isBooked(slot)"
          :class="{ active: time === slot, booked: isBooked(slot) }"
          @click="time = slot"
        >
          {{ slot }}
        </button>
      </div>

      <!-- Book Button -->
      <button class="book-btn" @click="book">Book Appointment</button>
    </div>
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
    alert('Select date and time')
    return
  }

  if (!authStore.user) {
    alert('Please login first')

    return
  }

  appointmentStore.bookAppointment({
    email: authStore.user.email,
    date: date.value,
    time: time.value,
  })

  alert('Appointment booked')
}
</script>

<style scoped>
.booking-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0f2fe, #fdf2f8);
}

/* Main Card */
.booking-card {
  background: white;
  padding: 40px;
  border-radius: 18px;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Title */
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 25px;
  background: linear-gradient(90deg, #3b82f6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Date Section */
.date-section {
  text-align: left;
  margin-bottom: 20px;
}

.date-section label {
  font-size: 14px;
  color: #6b7280;
}

.date-section input {
  margin-top: 6px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  outline: none;
}

.date-section input:focus {
  border-color: #3b82f6;
}

/* Slots */
.slots {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.slots button {
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Hover */
.slots button:hover {
  background: #e0f2fe;
  border-color: #3b82f6;
}

/* Active slot */
.slots button.active {
  background: #3b82f6;
  color: white;
  border: none;
}

/* Booked slot */
.slots button.booked {
  background: #e5e7eb;
  color: #9ca3af;
  cursor: not-allowed;
}

/* Book button */
.book-btn {
  margin-top: 30px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(34, 197, 94, 0.4);
}
</style>
