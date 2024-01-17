<script setup>
import AuthenticationCard from '@/components/AuthenticationCard.vue';
import InputLabel from '@/components/InputLabel.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import TextInput from '@/components/TextInput.vue';

</script>

<template>
<div class="register-page w-screen h-screen">
    <Navbar/>
    <AuthenticationCard>
        <div class="bg-white h-full rounded-r-lg p-5 w-[20rem] shadow-2xl">
        <form>
            <h1 class="text-center mb-6 md:font-bold text-xl font-semibold uppercase tracking-widest">Sign up</h1>
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput
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
                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="username"
                />
               
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput
                    id="password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                
            </div>

            <div class="mt-4">
                <InputLabel for="role" value ="Role" />
            <select class="block w-full border-purple-600 focus:border-purple-600 focus:ring-purple-600 rounded-md shadow-sm">
                    <option>Student</option>
                    <option>Teacher</option>
            </select>
            </div> 
            <div class="flex items-center justify-end mt-4">
                <a href="/login" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md p-2">
                    Already registered?
                </a>
                <PrimaryButton>
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
