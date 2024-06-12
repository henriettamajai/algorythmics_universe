<template>
    <div v-if="visible" class="modal" @keyup.enter="handleKeyUp">
      <div class="modal-content bg-white p-6 rounded shadow-lg text-center">
        <span class="close text-gray-500 hover:text-black text-2xl font-bold cursor-pointer" @click="close">&times;</span>
        <p class="mb-4">{{ message }}</p>
        <button @click="close" class="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">OK</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      message: {
        type: String,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      handleKeyUp(event) {
        if (event.key === 'Enter' && this.visible) {
          this.close();
        }
      }
    },
    mounted() {
      window.addEventListener('keyup', this.handleKeyUp);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.handleKeyUp);
    }
  };
  </script>
  