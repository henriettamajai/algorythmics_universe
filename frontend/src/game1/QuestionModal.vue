<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg max-w-md w-full">
        <p class="text-24 font-bold">{{ question }}</p>
        <div class="mt-4">
          <template v-for="(answer, index) in choices" :key="index">
            <div class="mb-2">
              <input 
                type="radio" 
                :id="index" 
                :value="index" 
                v-model="selectedAnswer"
                class="mr-2"
              >
              <label :for="'answer-' + index">{{ answer }}</label>
            </div>
          </template>
        </div>
        <button 
          class="block w-full mt-6 px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150" 
          @click="evaluateAnswer">
          OK
        </button>
        <p v-if="message" class="mt-2 text-red-600">{{ message }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: Boolean,
      question: String,
      choices: [String],
      answerIndex: Number
    },
    data() {
      return {
        selectedAnswer: null,
        message: ''
      };
    },
    methods: {
      evaluateAnswer() {  
        if (this.selectedAnswer == this.answerIndex) {
          this.$emit('answerEvent'); 
          this.selectedAnswer = null;
          this.message = ''; 

        } else {
          this.message = 'Incorrect answer. Try again!';
        }
      }
    },
  };
  </script>
  