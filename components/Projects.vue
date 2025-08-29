<template>
  <div class="container mx-auto p-4 md:p-10">
    <div class="mt-24 mb-8 text-center text-4xl font-bold md:text-5xl text-white">
      Projects
    </div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div
        v-for="(project, i) in paginatedItems"
        :key="i"
        class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
      >
        <img
          :src="project.img"
          :alt="project.title"
          class="h-64 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />

        <div
          class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <h3 class="mb-2 text-center text-xl font-semibold text-white">
            {{ project.title }}
          </h3>
          <p class="mb-4 text-center text-sm text-gray-300">
            {{ project.resume }}
          </p>

          <div class="flex space-x-4">
            <a
              v-if="project.git"
              :href="project.git"
              target="_blank"
              class="rounded-full bg-white p-2 text-black transition-colors duration-200 hover:bg-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.371 3.284 9.944 7.931 11.815.688.124.938-.299.938-.664v-2.195c-3.197.697-3.951-1.423-3.951-1.423-.521-1.325-1.272-1.681-1.272-1.681-1.037-.704.079-.69.079-.69 1.144.08 1.748 1.18.232 1.737-1.121.735-2.31.209-2.782-.047-.238-.697-.927-1.423-1.75-1.921-.692-.418-1.754-.42-1.754-.42-1.077-.076.082-.075.082-.075 1.259.088 2.378 1.294 2.871 2.392 1.328 2.868 3.55 1.628 4.606 1.24.128-.971.517-1.628.931-2.002-3.379-.39-6.931-1.688-6.931-7.502 0-1.654.593-2.992 1.571-4.045-.158-.39-.684-1.918.15-4.032 0 0 1.288-.413 4.226 1.579 1.22-.341 2.528-.511 3.826-.517 1.298.006 2.607.176 3.827.517 2.936-2.007 4.225-1.579 4.225-1.579.835 2.114.309 3.642.152 4.032.979 1.053 1.569 2.391 1.569 4.045 0 5.823-3.557 7.108-6.942 7.501.522.45.922 1.206.922 2.432v3.597c0 .366.25.792.945.663 4.646-1.872 7.929-6.444 7.929-11.815 0-6.627-5.372-12-12-12z" />
              </svg>
            </a>
            <a
              v-if="project.site"
              :href="project.site"
              target="_blank"
              class="rounded-full bg-white p-2 text-black transition-colors duration-200 hover:bg-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.186 9.171c-1.393.303-3.082 1.696-3.791 3.322-.345.795-1.373 3.633-1.745 4.67-.184.512-.527.683-1.01.683-.435 0-.759-.22-.962-.647-.215-.436-.106-1.077.291-1.636 1.096-1.626 2.062-3.325 3.123-5.013.918-1.464-.092-2.197-1.31-2.912l-2.029-.684c-1.79.06-2.986.726-4.576 2.766-.697.892-1.574 2.279-1.928 3.322-.293.868.048 1.458.75 1.458.283 0 .584-.131.905-.369 1.139-.854 2.146-2.091 3.208-3.024 1.144-.757 1.947-.647 3.34-.141l2.502.81c.883.217 2.196.402 3.181-.157.946-.531 1.705-1.528 1.705-2.822 0-1.789-1.373-2.618-2.585-3.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="totalPages > 1" class="mt-8 flex items-center justify-center">
      <button
        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div class="px-4 text-xl text-white">
        <span class="font-bold">{{ currentPage }}</span> / <span>{{ totalPages }}</span>
      </div>
      <button
        class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300"
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { projects } from '@/composables/projects.js';

// Reactive state for pagination
const currentPage = ref(1);
const itemsPerPage = 3;

// Computed properties for pagination logic
const totalPages = computed(() => Math.ceil(projects.length / itemsPerPage));
const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return projects.slice(startIndex, endIndex);
});
</script>