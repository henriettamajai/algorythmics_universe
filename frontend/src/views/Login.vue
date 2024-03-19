<script setup>
import AuthenticationCard from '@/components/AuthenticationCard.vue';
import Checkbox from '@/components/Checkbox.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

import Navbar from '@/components/Navbar.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const form = ref({
  email: '',
  password: '',
});

const router = useRouter();

const username = ref(''); // Define a ref to store the username

const loginUser = async () => {
  try {
    // Log the email and password being submitted
    console.log(form.value.email, form.value.password);

    // Send login request to the server
    const response = await axios.post('http://127.0.0.1:3000/api/login', {
      email: form.value.email,
      password: form.value.password,
    }, {
      responseType: 'json',
      withCredentials: true // Include credentials (cookies) in the request
    });

    // Check if the server responded with a token
    if (response.data && response.data.token) {
      // Store the token in localStorage for future requests
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.account.username); // Store the username in localStorage

      // Redirect the user to the dashboard route
      router.push({
        name: 'dashboard',
        params: { account: response.data.account }
      });
    } else {
      console.error('Login failed:', response.data.error);
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
  }
};
</script>

<template>
  <div class="login-page w-screen h-screen">
    <Navbar />
    <AuthenticationCard>
      <div class="bg-white h-[33rem] rounded-r-lg p-5 w-80 shadow-2xl">
        <form @submit.prevent="loginUser">
            <h1 class="text-center mb-6 md:font-bold text-xl font-semibold uppercase tracking-widest">Login</h1>

          <div>
            <InputLabel for="email" value="Email" />
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="mt-1 block w-full"
              required
              autofocus
              autocomplete="username"
            />
          </div>

          <div class="mt-4">
            <InputLabel for="password" value="Password" />
            <input
              id="password"
              v-model="form.password"
              type="password"
              class="mt-1 block w-full"
              required
              autocomplete="current-password"
            />
          </div>

          <div class="block mt-4">
            <label class="flex items-center">
              <Checkbox />
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div class="flex items-center justify-end mt-6">
            <PrimaryButton type="submit">
              Log in
            </PrimaryButton>
          </div>
        </form>
      </div>
    </AuthenticationCard>
  </div>
</template>

<style scoped>
.login-page, .login-page::before {
    background-image: url(@/assets/bg.png);
    background-size: cover;
    width: 100%;
}

.login-page {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
}

.login-page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 60%;
    z-index: -1;
}
</style>
