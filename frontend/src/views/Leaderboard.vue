<template>
    <div class="flex">
      <Sidebar />
      <div class="flex-grow max-w-md mx-auto mt-48 bg-purple-200 rounded-lg p-6 shadow-md">
        <h2 class="text-2xl font-bold mb-4 text-center text-purple-800">Leaderboard</h2>
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rank
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(score, index) in scores" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ index + 1 }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ score.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ score.score }}</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import apiClient from '@/services/api.js';
  import Sidebar from '@/components/Sidebar.vue'
  
  export default {
    components: {
      Sidebar
    },
    data() {
      return {
        scores: []
      };
    },
    async created() {
      try {
        const response = await apiClient.listAllScores();
        this.scores = response.scores.sort((a, b) => b.score - a.score);
      } catch (e) {
        console.error('Error fetching scores:', e);
      }
    }
  };
</script>

  