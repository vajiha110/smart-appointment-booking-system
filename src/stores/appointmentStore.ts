import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppointmentStore = defineStore('appointments', () => {
  const appointments = ref<any[]>([])

  const loadAppointments = () => {
    const stored = localStorage.getItem('appointments')

    if (stored) {
      appointments.value = JSON.parse(stored)
    }
  }

  const bookAppointment = (appointment: any) => {
    appointments.value.push(appointment)

    localStorage.setItem('appointments', JSON.stringify(appointments.value))
  }

  const cancelAppointment = (index: number) => {
    appointments.value.splice(index, 1)

    localStorage.setItem('appointments', JSON.stringify(appointments.value))
  }

  return {
    appointments,
    bookAppointment,
    cancelAppointment,
    loadAppointments,
  }
})
