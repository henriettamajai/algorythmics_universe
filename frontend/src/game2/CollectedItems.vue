<template>
  <div class="collected-items absolute top-4 right-4 bg-gray-900 text-white">
    <h2 class="text-xl font-semibold mb-2">Collected Items:</h2>
    <ul>
      <li v-for="(item, index) in collectedItems" :key="index" class="mb-1 p-2 rounded border border-gray-300">
        <span class="font-bold">{{ item.type }}:</span> {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    collectedItems: Array
  }
};
</script>

<style scoped>
.collected-items {
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #ccc;
  max-width: 300px; 
}
</style>
