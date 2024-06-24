<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full">
            <h1 class="text-2xl font-bold text-center mb-4">Java SWITCH</h1>
            <p><strong>SWITCH</strong> statements in Java are used to execute one out of many blocks of code based on the value of an expression.</p>
            <p>Here are some key points about Java SWITCH statements:</p>
            <ul class="list-disc pl-6 mt-2">
                <li><strong>Syntax:</strong> <code>switch (expression) { case value1: // code break; case value2: // code break; default: // code }</code></li>
                <li><strong>Case Labels:</strong> Each case label must be unique and followed by a colon.</li>
                <li><strong>Break Statement:</strong> Used to exit the SWITCH statement.</li>
                <li><strong>Default Case:</strong> Executed if no matching case is found.</li>
                <li><strong>Fall-Through:</strong> If the break is omitted, execution continues to the next case.</li>
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
