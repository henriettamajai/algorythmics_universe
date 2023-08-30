<template>
  <nav class="relative z-50 flex flex-nowrap items-center justify-between shadow-lg rounded-full py-4 text-white">
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="ml-6 text-sm text-white uppercase tracking-widest">
        <a :class="getClassForRoute('/dashboard')" href="/dashboard">Dashboard</a>
        <a :class="getClassForRoute('/courses')" class="ml-8" href="/courses">Courses</a>
        <a :class="getClassForRoute('/settings')" class="ml-8" href="/settings">Settings</a>
      </div>
      <Searchbar />
      <Notification />
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Searchbar from '@/Components/Searchbar.vue'
import Notification from '@/Components/Notification.vue'

function getClassForRoute(route) {
  return window.location.pathname === route ? 'text-xl text-purple-600 rounded-full font-bold' : 'text-white';
};
</script>