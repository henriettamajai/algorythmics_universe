<template>
  <div class="fixed inset-y-0 z-50 flex w-[18rem] flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/40 px-6 shadow-xl">
        <div class="flex h-16 items-center">
          <img class=" mt-4 h-13 w-auto mx-auto block" src="@/assets/logo.png" alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
          <div class="flex justify-center">
          <img class="h-48 rounded-full w-auto flex mt-12" src="@/assets/avatar.jpg" alt="Avatar" />
        </div>
        <h1 class="text-center text-white uppercase tracking-widest pt-4">{{ username }}</h1>
          <ul role="list" class="pt-16">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                <a @click.prevent="item.name === 'Logout' ? handleLogout() : null" :class="[item.current ? 'bg-purple-600/50 text-white uppercase tracking-widest' : 'text-white uppercase tracking-widest hover:text-purple-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6']">
                <component :is="item.icon" :class="[item.current ? 'text-white':'h-6 w-6' ]" />
              {{ item.name }}
            </a>
          </li>
              </ul>
            </li>
          </ul>
          <h1 class="mt-auto mb-12 text-white uppercase tracking-widest">Welcome,{{ username }} ! </h1>
        </nav>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Cookies from 'js-cookie';

const username = ref('');
onMounted(() => {
  const storedUsername = Cookies.get('username');
  if (storedUsername) {
    username.value = storedUsername;
  }
});

import {
  AcademicCapIcon,
  CogIcon,
  ArrowLeftIcon,
} from '@heroicons/vue/outline';

const navigation = ref([
  { name: 'My Courses', href: '/mycourses', icon: AcademicCapIcon, current: false },
  { name: 'Settings', href: '/settings', icon: CogIcon, current: false },
  { name: 'Logout', href: '/logout', icon: ArrowLeftIcon, current: false },
]);

const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
};
</script>

