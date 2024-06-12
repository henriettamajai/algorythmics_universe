<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-4 rounded-lg max-w-md w-full">
        <h2 class="text-lg font-bold mb-2">Congratulations!</h2>
        <p class="mb-4">You have successfully collected all items. Well done!</p>
        <router-link to="/courses" class="px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150">Back to Courses</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean
    }
  };
  </script>
  