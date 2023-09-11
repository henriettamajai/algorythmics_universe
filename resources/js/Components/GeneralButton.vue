<template>
  <button
    class="m-6 text-white uppercase tracking-widest bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
    :class="buttonClass"
    @click="handleClick"
    v-if="isVisible"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  buttonText: String,
  buttonClass: String,
  isVisible: Boolean,
  onClick: Function,
});

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  }
};
</script>
