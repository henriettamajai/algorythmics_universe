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
        v-if="currentChapterIndex > 0"
        @click="prevChapter">
        Previous
     </GeneralButton>

      <GeneralButton
        v-if="!isLastChapter"
        @click="nextChapter">
        Next
      </GeneralButton>
  
      <GeneralButton
        v-if="isLastChapter"
        @click="completeCourse">
        Complete Course
      </GeneralButton>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import '@/css/style.css';
import Navigation from '@/components/Navigation.vue';
import GeneralButton from '@/components/GeneralButton.vue';

const courseProps = defineProps(['course']);
const currentChapterIndex = ref(0);

const currentChapter = computed(() => {
  const chapters = courseProps.course.chapters;
  return chapters ? chapters[currentChapterIndex.value] : null;
});

const progressPercentage = computed(() => {
  const chapters = courseProps.course.chapters;
  return chapters ? ((currentChapterIndex.value + 1) / chapters.length) * 100 : 0;
});

const isLastChapter = computed(() => {
  const chapters = courseProps.course.chapters;
  return chapters ? currentChapterIndex.value === chapters.length - 1 : false;
});

function nextChapter() {
  const chapters = courseProps.course.chapters;
  if (chapters && !isLastChapter.value) {
    currentChapterIndex.value++;
  }
}

function prevChapter() {
  if (currentChapterIndex.value > 0) {
    currentChapterIndex.value--;
  }
}
</script>

