<template>
  <div class="border-2 border-purple-500 max-w-sm bg-white/10 shadow-lg rounded-lg overflow-hidden m-4 ">
    <img :src="`${course.imagePath}`" alt="Course Image" class="w-full h-32 object-cover" />
    <div class="p-4">
      <h3 class="text-xl font-semibold text-white uppercase tracking-widest">{{ course.title }}</h3>
      <div class="mt-2">
        <span v-for="(tag, index) in course.tags" :key="index" class="inline-block bg-purple-200 text-purple-800 p-2 rounded-full text-xs font-bold tracking-widest mr-2">{{ tag }}</span>
      </div>
      <p class="text-white mt-2">{{ course.description }}</p>
      
      <a :href="`/game${course.number}?courseId=${course._id}`">
        <button @click="startCourse" class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 uppercase tracking-widest">
          Start now
        </button>
      </a>
    </div>
  </div>
</template>

<script>

import { username, userId } from '../store/localStorage'
import api from '@/services/api'

export default {

  props: {
    course: {
      type: {
        _id: String,
        number: Number,
        title: String,
        imagePath: String,
        description: String,
        tags: [String]
      },
      required: true
    }
  },
  methods: {
    startCourse() {
      api.startCourseForUser(this.course._id, userId);
    }
  }
}
</script>