<template>
  <div>
    <Sidebar />
    <div class=" ml-72 px-2 py-1">
      <Navigation />
    </div>
    <div class=" ml-80 flex flex-wrap mt-8 gap-6">
      <div v-for="course in courses" :key="course.id" class=" border-2 border-purple-500 max-w-sm bg-white/10 shadow-lg rounded-lg overflow-hidden m-4">
        <img :src="course.image" alt="Course Image" class="w-full h-32 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold text-white uppercase tracking-widest">{{ course.title }}</h3>
          <p class="text-white mt-2">{{ course.description }}</p>
          <button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 uppercase tracking-widest">Enroll Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from '@/Components/Navigation.vue'
import Sidebar from '@/Components/Sidebar.vue'

const courses = [
  {
    id: 1,
    title: 'Course 1',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/images/default.png',
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/images/default.png',
  },
  {
    id: 3,
    title: 'Course 3',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/images/default.png',
  },
  {
    id: 4,
    title: 'Course 4',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/images/default.png',
  },
];
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to bottom, rgba(208,141,236,1), rgba(164,43,164,1),rgba(100,27,121,1), rgba(56,18,87,1), rgba(5,4,5,1));
  background-size: cover;
  background-attachment: fixed;
}
</style>