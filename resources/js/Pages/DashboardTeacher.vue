<template>
  <div>
    <SidebarTeacher />
    <main class="ml-72">
      <div class="px-2 py-1">
        <Navigation />
        <h1 class="text-xl text-white bg-transparent px-3 py-2 m-6 font-medium">
            Personal Quiz Library
        </h1>
        <div v-if="quizzes.length === 0">No quizzes found.</div>
          <div v-else class="ml-8 flex flex-wrap mt-8 gap-8">
            <div v-for="quiz in quizzes" :key="quiz.id"
                class="border-2 border-purple-500 w-80 h-40 bg-white/10 shadow-lg rounded-lg overflow-hidden m-4">
                <h3 class="text-xl text-center text-white font-semibold mt-2 uppercase tracking-widest">{{ quiz.title }}</h3>
                <p class="text-white m-2 mt-6">Number of Attempts: {{ quiz.numAttempts }}</p>
                <p class="text-white m-2">Average Result: {{ quiz.averageResult }}%</p>
            </div>
      </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import '../../css/style.css'
import { ref } from 'vue'
import Navigation from '@/Components/Navigation.vue'
import SidebarTeacher from '@/Components/SidebarTeacher.vue'

// hardcoded data for now 
const quizzes = ref([
  {
    id: 1,
    title: 'Quiz 1',
    numAttempts: 20,
    averageResult: 75,
  },
  {
    id: 2,
    title: 'Quiz 2',
    numAttempts: 15,
    averageResult: 85,
  },
  {
    id: 3,
    title: 'Quiz 3',
    numAttempts: 15,
    averageResult: 95,
  },
  {
    id: 4,
    title: 'Quiz 4',
    numAttempts: 15,
    averageResult: 65,
  },
]);

</script>

