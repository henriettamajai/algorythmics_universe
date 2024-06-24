<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full">
            <h1 class="text-2xl font-bold text-center mb-4">Java WHILE Loop</h1>
            <p><strong>WHILE</strong> loops in Java are used to repeat a block of code as long as a specified condition is true.</p>
            <p>Here are some key points about Java WHILE loops:</p>
            <ul class="list-disc pl-6 mt-2">
                <li><strong>Syntax:</strong> <code>while (condition) { // code to be executed }</code></li>
                <li><strong>Condition:</strong> The loop continues to execute as long as the condition is true.</li>
                <li><strong>Infinite Loop:</strong> If the condition is always true, the loop will execute indefinitely.</li>
                <li><strong>Breaking the Loop:</strong> Use a <code>break</code> statement to exit the loop early.</li>
                <li><strong>Skipping Iterations:</strong> Use a <code>continue</code> statement to skip the current iteration and proceed to the next one.</li>
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
