<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-8 rounded-lg max-w-md w-full">
            <h1 class="text-2xl font-bold text-center mb-4">Java Variables</h1>
            <p><strong>Variables</strong> are containers for storing data values.</p>
            <p>In Java, there are different types of variables, for example:</p>
            <ul class="list-disc pl-6 mt-2">
                <li><strong>string</strong> - stores text, such as "Hello". String values are surrounded by double quotes</li>
                <li><strong>int</strong> - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                <li><strong>float</strong> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                <li><strong>char</strong> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                <li><strong>boolean</strong> - stores values with two states: true or false</li>
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
