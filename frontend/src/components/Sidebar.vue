<template>
  <div class="fixed inset-y-0 z-50 flex w-[18rem] flex-col">
    <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/40 px-6 shadow-xl">
      <div class="flex h-16 items-center">
        <img class="mt-4 h-13 w-auto mx-auto block" src="@/assets/logo.png" alt="Your Company" />
      </div>
      <nav class="flex flex-1 flex-col">
        <div class="flex justify-center">
          <img class="h-48 rounded-full w-auto flex mt-12" src="@/assets/avatar.jpg" alt="Avatar" />
        </div>

        <div>
          <h1 class="text-center text-white uppercase tracking-widest pt-4">{{ score }} POINTS</h1>
        </div>
        <h1 class="text-center text-white uppercase tracking-widest pt-4">{{ username }}</h1>
        <ul role="list" class="pt-16">
          <li>
            <ul role="list" class="-mx-2 space-y-4">
              <li v-for="item in navigation" :key="item.name">
                <a 
                  @click.prevent="navigateTo(item)" 
                  :class="[item.current ? 'bg-white text-purple-600' : 'text-white hover:text-purple-600 hover:bg-gray-50', 'uppercase tracking-widest group flex gap-x-3 rounded-md text-sm leading-6 p-2']"
                >
                  <component :is="item.icon" :class="[item.current ? 'h-6 w-6 text-purple-600' : 'h-6 w-6 text-white']" />
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <h1 class="mt-auto mb-12 text-white uppercase tracking-widest">Welcome, {{ username }}!</h1>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {
  AcademicCapIcon,
  CogIcon,
  ArrowLeftIcon,
} from '@heroicons/vue/outline';
import api from '@/services/api';
import { userId } from '@/store/localStorage';

const username = ref(localStorage.getItem('username'));
const score = ref();
onMounted(async () => {
  const storedUsername = sessionStorage.getItem('username');
  const scoreFromDb = await api.getUserScore(userId)
  if (storedUsername) {
    username.value = storedUsername;
  }
  if (scoreFromDb) {
    score.value = scoreFromDb.score;
  }
  updateCurrentNavigation();
});

const navigation = ref([
  { name: 'My Courses', href: '/dashboard', icon: AcademicCapIcon, current: false },
  { name: 'My Profile', href: '/profile', icon: CogIcon, current: false },
  { name: 'Leaderboard', href: '/leaderboard', icon: AcademicCapIcon, current: false},
  { name: 'Logout', href: '/logout', icon: ArrowLeftIcon, current: false },
]);

const updateCurrentNavigation = () => {
  const path = window.location.pathname;
  navigation.value.forEach(navItem => {
    navItem.current = navItem.href === path;
  });
};

const navigateTo = (item) => {
  navigation.value.forEach(navItem => {
    navItem.current = navItem === item;
  });
  if (item.href === '/logout') {
    handleLogout();
  } else {
    window.location.href = item.href;
  }
};

const handleLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('_id');
  window.location.href = '/';
};
</script>
