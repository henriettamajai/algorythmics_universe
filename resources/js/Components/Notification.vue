<template>
  <div class="relative inline-block">
    <button class="relative w-12" type="button" @click="toggleDropdown">
      <BellIcon class="h-7 w-8 text-white mt-3" />
    </button>
    
    <div v-if="showDropdown" class="absolute border bg-black/20 border-white rounded-lg right-0 mt-2 bg-white-700/50 text-white shadow-lg w-80">
      <ul class="py-2">
        <li class="px-4 py-2 hover:text-purple-600 hover:bg-gray-50 cursor-pointer">Notification 1</li>
        <li class="px-4 py-2 hover:text-purple-600 hover:bg-gray-50 cursor-pointer">Notification 2</li>
        <li class="px-4 py-2 hover:text-purple-600 hover:bg-gray-50 cursor-pointer">Notification 3</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BellIcon } from '@heroicons/vue/24/outline';

const components = {
  BellIcon
};

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>
