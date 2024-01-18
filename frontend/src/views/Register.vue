<script setup>
import AuthenticationCard from '@/components/AuthenticationCard.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

import axios from 'axios';
import { ref } from 'vue';


const formData = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const registerUser = async () => {
  try {
      console.log(formData.value)
      
        const response = await axios.post('http://127.0.0.1:3000/api/register', formData.value);
        console.log('User registered successfully', response.data);
  } catch (error) {
    console.error('Error registering user', error);
  }
};


</script>

<template>
<div class="register-page w-screen h-screen">
    <Navbar/>
    <AuthenticationCard>
        <div class="bg-white h-full rounded-r-lg p-5 w-[20rem] shadow-2xl">
        <form @submit.prevent="registerUser">
            <h1 class="text-center mb-6 md:font-bold text-xl font-semibold uppercase tracking-widest">Sign up</h1>
            <div>
                <InputLabel for="name" value="UserName" />
                <input
                    v-model="formData.name"
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="name"
                />
        
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <input
                v-model="formData.email"
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="username"
                />
               
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <input
                v-model="formData.password"
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <input
                    v-model="formData.password_confirmation"
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                
            </div>
            <div class="flex items-center justify-end mt-4">
                <a href="/login" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md p-2">
                    Already registered?
                </a>
                <PrimaryButton type="submit">
                    Register
                </PrimaryButton>
            </div>
        </form>
        </div>
    </AuthenticationCard>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
 
  export default {
      components: {
          Navbar,
          AuthenticationCard

      }
  }
  </script>

<style scoped>
.register-page, .register-page::before {
    background-image: url(@/assets/bg.png);
    background-size: cover;
    width: 100%;
    height: 100vh;
}

.register-page {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
}

.register-page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 60%;
    z-index: -1;
}
</style>
