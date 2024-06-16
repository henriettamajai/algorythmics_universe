<template>
  <div class="flex">
    <Sidebar />
    <div class="flex-grow max-w-md mx-auto mt-48 bg-purple-200 rounded-lg p-6 shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-center text-purple-800">Change Password</h2>
      <form @submit.prevent="changePassword" class="space-y-4 bg-purple-200">
        <div>
          <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
          <input id="currentPassword" v-model="currentPassword" type="password" autocomplete="current-password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
          <input id="newPassword" v-model="newPassword" type="password" autocomplete="new-password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        <div>
          <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
          <input id="confirmPassword" v-model="confirmPassword" type="password" autocomplete="new-password" required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150">
          <span class="text-center">Change Password</span>
        </button>
      </form>
      <p v-if="message" class="mt-4 text-red-600 text-center">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
import { ref } from 'vue';
import api from '@/services/api';

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const message = ref('');

const changePassword = async () => {
  if (newPassword.value !== confirmPassword.value) {
    message.value = 'Passwords do not match.';
    return;
  }
  try {
    const response = await api.changePassword(currentPassword.value, newPassword.value);
    message.value = 'Password changed successfully.';
    currentPassword.value = '';
    newPassword.value = '';
    confirmPassword.value = '';
  } catch (error) {
    console.error('Error changing password', error.message);
    message.value = error.message || 'Failed to change password.';
  }
};
</script>

