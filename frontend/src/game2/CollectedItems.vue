<!-- CollectedItems.vue -->
<template>
    <div class="collected-items">
      <h2>Collected Items:</h2>
      <ul>
        <li v-for="(item, index) in collectedItems" :key="index">
          {{ item.type }}: {{ item.value }}
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
  
  <style>
  .collected-items {
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
  </style>
  