<template>
  <div class="container">
    <div class="register-card">
      <h2>Create Account</h2>

      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label>Name</label>
          <input type="text" v-model="name" placeholder="Enter your name" required />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="email" placeholder="Enter your email" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" placeholder="Enter password" required />
        </div>

        <div class="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm password"
            required
          />
        </div>

        <button type="submit">Register</button>

        <p class="login-text">
          Already have an account?
          <router-link to="/login">Login</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    alert('Please fill all fields')
    return
  }

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match')
    return
  }

  console.log('Register Data:', {
    name: name.value,
    email: email.value,
    password: password.value,
  })

  alert('Registration successful (demo)')
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f6f9;
}

.register-card {
  background: white;
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  background: #22c55e;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #16a34a;
}

.login-text {
  margin-top: 15px;
  text-align: center;
}
</style>
