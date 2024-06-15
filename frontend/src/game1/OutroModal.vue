<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg max-w-md w-full text-center">
      <h2 class="text-2xl font-bold mb-4">Congratulations!</h2>
      <p class="mb-4">You have completed the course and collected all items! Here is your key to unlock the next level!</p>
      <img src="@/assets/key1.png" alt="Key Icon" class="mx-auto mb-4" />
      <button 
        class="px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150" 
        @click="closeModal"
      >
        Start Next Level
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
</style>
