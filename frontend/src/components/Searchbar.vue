<template>
   <div class="flex-grow items-center mt-2 basis-auto">
          <div class="ml-auto w-[300px] lg:pr-2">
            <div class="relative flex w-full flex-wrap items-stretch">
            <input v-model="searchInput"
            type="search" 
            class="relative m-0 -mr-0.5 pl-8 block w-[1px] min-w-0 text-white border border-white focus:border-purple-900 shadow-m flex-auto rounded-full bg-transparent bg-clip-padding px-3 py-[0.25rem] transition duration-200 ease-in-out motion-reduce:transition-none" 
            placeholder="Search.."/>
            <div class="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
                <SearchIcon class="h-5 w-5"/>
            </div>
            </div>
          </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { SearchIcon } from '@heroicons/vue/outline';

const searchInput = ref('');
</script>

<style>
::placeholder { 
  color: white !important;
  opacity: 1;
}
</style>