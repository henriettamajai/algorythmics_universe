<template>
    <div v-if="visible" class="modal">
      <div class="modal-content">
        <h1 class="text-2xl font-bold text-center mb-4">Message</h1>
        <p class="text-center">
          <b>Oops</b>, you can't put this item in your backpack because it's not of type float.
        </p>
        <button
          class="block w-full mt-6 px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150"
          @click="closeModal"
        >
          OK
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
  .modal {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  </style>
  