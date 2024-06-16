<template>
    <div>
      <Sidebar />
      <div class="max-w-md mx-auto mt-8">
        <h2 class="text-2xl font-bold mb-4">Change Password</h2>
  
        <form @submit.prevent="changePassword">
          <div class="mb-4">
            <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
            <input id="currentPassword" v-model="currentPassword" type="password" autocomplete="current-password" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
  
          <div class="mb-4">
            <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
            <input id="newPassword" v-model="newPassword" type="password" autocomplete="new-password" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
  
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input id="confirmPassword" v-model="confirmPassword" type="password" autocomplete="new-password" required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          </div>
  
          <button type="submit"
            class="w-full bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Change Password
          </button>
        </form>
  
        <p v-if="message" class="mt-4 text-red-600">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '@/components/Sidebar.vue';
  import { ref } from 'vue';
  
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
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: currentPassword.value,
          newPassword: newPassword.value
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to change password.');
      }
  
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
  