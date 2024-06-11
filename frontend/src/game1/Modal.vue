<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg max-w-md w-full">
            <h2 class="text-lg font-bold mb-2">{{ question }}</h2>
            <input v-model="userAnswer" @keyup.enter="submitAnswer" type="text" class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-purple-400" />
            <button @click="submitAnswer" class="mt-2 px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150">Submit</button>
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
