<template>
  <button
    class="m-6 text-white uppercase tracking-widest bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg"
    @click="$emit('click')"
  >
  <slot></slot>
  </button>
</template>

