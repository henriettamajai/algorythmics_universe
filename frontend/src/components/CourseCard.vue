<template>
  <div class="border-2 border-purple-500 max-w-sm bg-white/10 shadow-lg rounded-lg overflow-hidden m-4 ">
    <img :src="`${course.imagePath}`" alt="Course Image" class="w-full h-32 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-white uppercase tracking-widest">{{ course.title }}</h3>
      <div class="mt-2">
        <span v-for="(tag, index) in course.tags" :key="index" class="inline-block bg-purple-200 text-purple-800 p-2 rounded-full text-xs font-bold tracking-widest mr-2">{{ tag }}</span>
      </div>
      <p class="text-white mt-2">{{ course.description }}</p>
      
      <div v-if="!props.course.isAccessible" class="flex items-center mt-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-4-8a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
        <span class="text-red-500">Locked</span>
      </div>

      <a v-if="props.course.isAccessible" :href="`/game${course.number}?courseId=${course._id}`">
        <button @click="startCourse" class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 uppercase tracking-widest">
          Start now
        </button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import api from '@/services/api';
import { userId } from '../store/localStorage';

const props = defineProps({
  course: {
    type: Object,
    required: true
  }
});

const startCourse = () => {
  api.startCourseForUser(props.course._id, userId);
};
if (props.course.number === 1) {
  props.course.isAccessible = true;
}

</script>
