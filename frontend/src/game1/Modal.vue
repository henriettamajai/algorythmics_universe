<template>
    <div v-if="visible" class="modal-overlay">
      <div class="modal">
        <h2>{{ question }}</h2>
        <input v-model="userAnswer" @keyup.enter="submitAnswer" type="text" />
        <button @click="submitAnswer">Submit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      question: String,
      visible: Boolean
    },
    data() {
      return {
        userAnswer: ''
      };
    },
    methods: {
      submitAnswer() {
        this.$emit('submit', this.userAnswer);
      }
    }
  };
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
  
  .modal input {
    margin-top: 10px;
  }
  </style>
  