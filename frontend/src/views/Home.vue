<template>
    <div class="homepage">
      <Navbar />
  
      <div class="text-white p-12 m-32 rounded-lg ">
      <div class="bg-opacity-50 bg-gray-400 backdrop-blur rounded-lg shadow-xl p-8 border-2 border-black border-opacity-50">
          <h1 class="text-5xl text-center  m-6">Welcome to Algorythmics Universe: Your Gateway to Programming Mastery!</h1>
          <p class="text-2xl tracking-wide m-12 ">
            Are you ready to unlock the world of programming? Look no further! Algorythmics Universe is your one-stop destination for mastering the basics of programming and testing your skills through interactive quizzes. Whether you're a curious beginner or someone looking to solidify your programming foundation, we've got you covered.
          </p>
          <a href="/register" class=" px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700  focus:ring-offset-2 transition ease-in-out duration-150">Get Started</a>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import Navbar from '@/components/Navbar.vue'
  export default {
      components: {
          Navbar,
      }
  }
  </script>
  
  <style scoped>
  .homepage {
    background-image: url('@/assets/bg.png');
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
  </style>
  