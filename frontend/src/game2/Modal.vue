<template>
  <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg max-w-md w-full">
      <h1 class="text-2xl font-bold text-center mb-4">Message</h1>
      <p class="text-center">{{ question }}</p>
      <button
        class="block w-full mt-6 px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150"
        @click="handleSubmit"
      >
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    visible: Boolean
  },
  methods: {
    handleSubmit() {
      this.$emit('submit');
    }
  }
};
</script>
