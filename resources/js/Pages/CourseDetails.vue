<template>
  <div>
    <div class="px-2 py-1">
      <Navigation />
    </div>
    <!-- Progress bar -->
    <div class="my-4 flex justify-center items-center h-12">
      <div class="bg-grey-400 rounded-lg w-3/4 shadow-lg">
        <div class="bg-purple-800 h-4 rounded-lg" :style="{ width: `${progressPercentage}%` }"></div>
      </div>
    </div>
    <p class="mt-2 text-center text-white uppercase tracking-widest">{{ currentChapterIndex + 1 }} / {{ course.chapters.length }}</p>
    <div class="text-center bg-opacity-50 backdrop-blur">
      <h1 class="text-3xl font-semibold text-white uppercase tracking-widest mt-6 mb-6">{{ course.title }}</h1>
      <div class="border border-white/50 rounded-xl ml-24 mr-24 shadow-lg">
      <h2 class="text-white uppercase tracking-widest text-2xl mt-6 mb-6">{{ currentChapter.title }}</h2>
      <p class="mb-6 text-white/90 text-xl text-left p-12">{{ currentChapter.content }}</p>
    </div>
     <GeneralButton
        buttonText="Previous"
        :isVisible="currentChapterIndex > 0"
        @click="prevChapter"/>

      <GeneralButton
        buttonText="Next"
        :isVisible="!isLastChapter"
        @click="nextChapter"/>
  
      <GeneralButton
        buttonText="Complete Course"
        :isVisible="isLastChapter"
        @click="completeCourse"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import '../../css/style.css'
import Navigation from '@/Components/Navigation.vue'
import GeneralButton from '@/Components/GeneralButton.vue'
import { Inertia } from '@inertiajs/inertia';

const { course } = defineProps(['course'])

const currentChapterIndex = ref(0)

const currentChapter = computed(() => course.chapters[currentChapterIndex.value])

const progressPercentage = computed(() => ((currentChapterIndex.value + 1) / course.chapters.length) * 100)

const isLastChapter = computed(() => currentChapterIndex.value === course.chapters.length - 1)

function nextChapter() {
  if (!isLastChapter.value) {
    currentChapterIndex.value++
  }
}

function prevChapter() {
  if (currentChapterIndex.value > 0) {
    currentChapterIndex.value--
  }
}

function completeCourse() {
  if (isLastChapter.value) {
    Inertia.visit('/courses');
    course.status = 'completed';
  }
}
</script>
