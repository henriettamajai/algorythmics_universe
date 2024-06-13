<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full">
            <h1 class="text-2xl font-bold text-center mb-4">Java Arrays</h1>
            <p><strong>Arrays</strong> in Java are used to store multiple values in a single variable.</p>
            <p>Here are some key points about Java arrays:</p>
            <ul class="list-disc pl-6 mt-2">
                <li><strong>Declaration:</strong> Arrays are declared using square brackets, e.g., <code>int[] numbers;</code></li>
                <li><strong>Initialization:</strong> Arrays can be initialized when declared, e.g., <code>int[] numbers = {1, 2, 3};</code></li>
                <li><strong>Access:</strong> Elements in arrays are accessed using zero-based index, e.g., <code>int firstElement = numbers[0];</code></li>
                <li><strong>Length:</strong> Arrays have a property <code>length</code> to get the number of elements, e.g., <code>int length = numbers.length;</code></li>
                <li><strong>Mutability:</strong> Arrays in Java are mutable, meaning elements can be changed after initialization.</li>
            </ul>
            <button class="block w-full mt-6 px-4 py-2 bg-purple-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-700 focus:ring-offset-2 transition ease-in-out duration-150" @click="closeModal">OK</button>
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
