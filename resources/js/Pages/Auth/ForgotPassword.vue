<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    status: String,
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
<div class="forgot-pw-page w-screen h-screen"> 
    <Head title="Forgot Password" />
        <Navbar />
    <AuthenticationCard>
            <AuthenticationCardLogo />
        <div class="bg-white h-[33rem] rounded-r-lg p-5 w-[20rem] shadow-2xl">
        <div class=" mt-32 mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="email" value="Email" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="username"
                />
                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Email Password Reset Link
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
.forgot-pw-page, .forgot-pw-page::before {
    background-image: url(./images/bg.png);
    background-size: cover;
    width: 100%;
}

.forgot-pw-page {
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
}

.forgot-pw-page::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    opacity: 60%;
    z-index: -1;
}
</style>
