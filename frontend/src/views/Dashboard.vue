<template>
  <div>
    <Sidebar :user="user" />
    <main class="ml-72">
      <div class="px-2 py-1">
        <Navigation />
        <div class="flex-grow items-center">
          <button class="text-xl text-white bg-transparent px-3 py-2 m-6 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory('In Progress')">
            In progress
          </button>
          <button class="text-xl text-white bg-transparent px-3 py-2 m-6 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory('Completed')">
            Completed
          </button>
          <button class="text-xl text-white bg-transparent px-3 py-2 m-6 font-medium hover:text-purple-700 hover:bg-gray-50 rounded-full"
            @click="showCategory('Upcoming')">
            Upcoming
          </button>
          <a class="text-xs m-6 text-white uppercase tracking-widest" href="/mycourses">view all</a>
          <!-- Container for courses -->
          <div class="flex flex-row gap-6 m-6 mt-auto">
            <div v-for="(course, index) in filteredCourses" :key="index"
                 class="w-80 h-80 border border-white rounded-lg shadow-lg">
              {{ course.name }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from '@/components/Navigation.vue'
import Sidebar from '@/components/Sidebar.vue'

const isInProgressShown = ref(false);
const isCompletedShown = ref(false);
const isUpcomingShown = ref(false);

const categoryNames = {
  inProgress: 'In Progress',
  completed: 'Completed',
  upcoming: 'Upcoming'
};

const courses = [
  { id: 1, name: 'Course 1', status: categoryNames.inProgress },
  { id: 2, name: 'Course 2', status: categoryNames.completed },
  { id: 3, name: 'Course 3', status: categoryNames.upcoming },
  { id: 4, name: 'Course 4', status: categoryNames.upcoming },
  { id: 5, name: 'Course 5', status: categoryNames.upcoming },
  { id: 6, name: 'Course 6', status: categoryNames.completed }
];

const filteredCourses = ref([]);

function showCategory(category) {
  isInProgressShown.value = category === categoryNames.inProgress;
  isCompletedShown.value = category === categoryNames.completed;
  isUpcomingShown.value = category === categoryNames.upcoming;
  filteredCourses.value = courses.filter(course => course.status === category);
  filteredCourses.value = filteredCourses.value.slice(0, 3);
}
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
