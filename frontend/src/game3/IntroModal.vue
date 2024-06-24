<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full">
            <h1 class="text-2xl font-bold text-center mb-4">Java IF..ELSE</h1>
            <p><strong>IF..ELSE</strong> statements in Java are used for conditional logic execution.</p>
            <p>Here are some key points about Java IF..ELSE statements:</p>
            <ul class="list-disc pl-6 mt-2">
                <li><strong>Simple IF:</strong> An IF statement executes a block of code if its condition is true, e.g., <code>if (condition) { // code to execute }</code></li>
                <li><strong>IF..ELSE:</strong> An IF statement can be followed by an ELSE statement to execute a block of code if the condition is false, e.g., <code>if (condition) { // code to execute if true } else { // code to execute if false }</code></li>
                <li><strong>ELSE IF:</strong> To test multiple conditions, you can use ELSE IF, e.g., <code>if (condition1) { // code } else if (condition2) { // code } else { // code }</code></li>
                <li><strong>Nested IF:</strong> IF statements can be nested within each other for more complex logic, e.g., <code>if (condition1) { if (condition2) { // code } }</code></li>
                <li><strong>Ternary Operator:</strong> A shorthand for IF..ELSE is the ternary operator, e.g., <code>result = (condition) ? value1 : value2;</code></li>
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
