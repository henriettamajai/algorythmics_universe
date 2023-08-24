<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
<div class="registerpage w-screen h-screen">
    <Navbar/>
    <Head title="Register"/>
    
    <AuthenticationCard>
        <div class="bg-white h-full rounded-r-lg p-5 w-[20rem] shadow-2xl">
        <form @submit.prevent="submit">
            <h1 class="text-center mb-6 md:font-bold text-xl font-semibold uppercase tracking-widest">Sign up</h1>
            <div>
                <InputLabel for="name" value="Name" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="name"
                />
                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="mt-4">
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="mt-4">
                <InputLabel for="password_confirmation" value="Confirm Password" />
                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>

            <div class="mt-4">
                <InputLabel for="role" value ="Role" />
            <select class="block w-full border-purple-600 focus:border-purple-600 focus:ring-pruple-600 rounded-md shadow-sm">
                    <option>Student</option>
                    <option>Teacher</option>
            </select>
            </div> 
            <div class="flex items-center justify-end mt-4">
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-">
                    Already registered?
                </Link>

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Register
                </PrimaryButton>
            </div>
        </form>
        </div>
    </AuthenticationCard>
    </div>
</template>

<script>
import Navbar from '@/Components/Navbar.vue'
export default {
    components: {
        Navbar,
    }
}
</script>

<style scoped>
.registerpage {
  background-image: url(./images/bg.png);
  background-size: cover;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
}
.registerpage::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./images/bg.png);
  background-size: cover;
  opacity: 60%;
  z-index: -1;
  
}
</style>
