<template>
    <div class="border-2 border-purple-500 max-w-sm bg-white/10 shadow-lg rounded-lg overflow-hidden m-4 ">
      <img :src="course.image" alt="Course Image" class="w-full h-32 object-cover" />
      <div class="p-4">
        <h3 class="text-xl font-semibold text-white uppercase tracking-widest">{{ course.title }}</h3>
        <p class="text-white mt-2">{{ course.description }}</p>
        <a :href="`/game${course.id}`">
          <button class="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 uppercase tracking-widest">
            Start now
          </button>
        </a>
      </div>
    </div>
  </template>
  

<script>
  export default {
    props: {
      course: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  