<template>
  <div>
    <Sidebar :username="username" />
    <main class="ml-72">
      <div class="px-2 py-1">
        <Navigation />
        <div class="flex-grow items-center">
          <button class="text-xl text-white bg-transparent px-3 py-2 m-2 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory(categoryNames.inProgress)">
            In progress
          </button>
          <button class="text-xl text-white bg-transparent px-3 py-2 m-2 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory(categoryNames.completed)">
            Completed
          </button>
          <button class="text-xl text-white bg-transparent px-3 py-2 m-2 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory(categoryNames.favorite)">
            Favorite
          </button>
          <a class="text-xs m-2 text-white uppercase tracking-widest" href="/mycourses">view all</a>
          
          <div class="flex flex-wrap justify-center">
            <div v-for="(chunk, index) in chunkedCourses" :key="index" class="flex flex-row gap-6 mt-6">
              <CourseCard v-for="data in chunk" :key="data._id" :course="data.course" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Navigation from '@/components/Navigation.vue';
import Sidebar from '@/components/Sidebar.vue';
import { searchQuery } from '@/store/searchState';
import api from '@/services/api';
import { userId, username } from '../store/localStorage';
import CourseCard from '@/components/CourseCard.vue';

const categoryNames = {
  inProgress: 'inProgress',
  completed: 'completed',
  favorite: 'favorite',
  notStarted: 'notStarted'
};

const selectedCategory = ref(categoryNames.inProgress);
const courses = ref([]);

function showCategory(category) {
  selectedCategory.value = category;
}

onMounted(async () => {
  if (username) {
    try {
      const response = await api.getUserCourses(userId);
      courses.value = response;
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }
});

const filteredCourses = computed(() => {
  let filtered = courses.value.filter(course => course.status === selectedCategory.value);

  if (!searchQuery.value || courses.value.length === 0) {
    return filtered;
  }
  
  if (searchQuery.value) {
    filtered = filtered.filter(data =>
      data.course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      data.course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  return filtered;
});

const chunkedCourses = computed(() => {
  const chunkSize = 3;
  const chunked = [];

  for (let i = 0; i < filteredCourses.value.length; i += chunkSize) {
    chunked.push(filteredCourses.value.slice(i, i + chunkSize));
  }
  return chunked;
});

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
