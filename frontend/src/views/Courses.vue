<template>
  <div>
    <Sidebar />
    <div class="ml-72 px-2 py-1">
      <Navigation />
    </div>
    <div class="ml-80 flex flex-wrap mt-8 gap-6">
      <CourseCard v-for="course in courses" :key="course.id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import '@/css/style.css'
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'
import CourseCard from '@/components/CourseCard.vue'
const courses = [
  {
    id: 1,
    title: 'Game 1',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/assets/default.png',
    badges: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'Course 2',
    description: 'Learn the basics of HTML, CSS, and JavaScript.',
    image: '/assets/default.png',
    badges: ['HTML', 'CSS', 'JavaScript'],
  },
  {
  id: 3,
  title: 'Course 3',
  description: 'Learn the basics of HTML, CSS, and JavaScript.',
  image: '/assets/default.png',
  badges: ['HTML', 'CSS', 'JavaScript'],
},
{
  id: 4,
  title: 'Course 4',
  description: 'Learn the basics of HTML, CSS, and JavaScript.',
  image: '/assets/default.png',
  badges: ['HTML', 'CSS', 'JavaScript'],
},
];

</script>