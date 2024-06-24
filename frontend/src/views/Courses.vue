<template>
  <div>
    <Sidebar />
    <div class="ml-72 px-2 py-1">
      <Navigation />
    </div>
    <div class="ml-80 flex flex-wrap mt-8 gap-6 items-center justify-center">
      <CourseCard v-for="course in filteredCourses" :key="course._id" :course="course" />
    </div>
  </div>
</template>

<script setup>
import '@/css/style.css'
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'
import CourseCard from '@/components/CourseCard.vue'
import { searchQuery } from '@/store/searchState'
import { computed, ref, onMounted } from 'vue';
import api from '@/services/api';


const courses = ref([]);

onMounted(async () => {
  try {
    const response = await api.getAllCourses();
    console.log('response ', response)
    courses.value = response
  } catch (error) {
    console.error("Failed to fetch courses:", error);
  }
});

const filteredCourses = computed(() => {
  if (!searchQuery.value || courses.value.length == 0) {
    return courses.value;
  }
  return courses.value.filter(course =>
    course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});


</script>