<template>
  <button
    class="m-6 text-white uppercase tracking-widest bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
    @click="handleClick"
    v-if="isVisible"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>

const { buttonText, isVisible, onClick } = defineProps(['buttonText', 'isVisible', 'onClick']);

const handleClick = () => {
  if (onClick) {
    onClick();
  }
};
</script>
