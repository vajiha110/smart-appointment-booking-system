<template>
  <nav class="navbar">
    <h2 class="logo">SmartAppointments</h2>

    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/book">Book Appointment</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #3b82f6;
  color: white;
}

.logo {
  font-size: 20px;
}

.nav-links a {
  margin-left: 20px;
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
