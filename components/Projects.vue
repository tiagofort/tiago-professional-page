<template>
  <div class="text-center mb-12">
    <h2 class="text-4xl md:text-5xl font-bold text-white">My Works</h2>
  </div>
  <div class="container mx-auto py-16">
    <!-- Carrossel -->
    <div class="relative overflow-hidden">
      <!-- Slides wrapper -->
      <div
        class="flex transition-transform duration-500"
        :style="{
          transform: `translateX(-${currentIndex * 100}%)`,
        }"
      >
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="flex-shrink-0 px-4"
          :style="{ width: `${100 / itemsPerView}%` }"
        >
          <div
            class="relative h-[400px] rounded-3xl overflow-hidden shadow-lg group bg-white"
          >
            <div class="flex-1 flex items-center justify-center p-4">
              <img
                :src="project.img"
                :alt="project.title"
                class="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white"
            >
              <h3 class="text-2xl font-semibold">{{ project.title }}</h3>
              <p class="text-sm opacity-80 mb-4">{{ project.resume }}</p>

              <div class="flex gap-3">
                <a
                  v-if="project.git"
                  :href="project.git"
                  target="_blank"
                  class="bg-white/90 hover:bg-white text-black rounded-full p-2"
                >
                  <Icon icon="mdi:github" class="w-6 h-6" />
                </a>
                <a
                  v-if="project.site"
                  :href="project.site"
                  target="_blank"
                  class="bg-white/90 hover:bg-white text-black rounded-full p-2"
                >
                  <Icon icon="streamline-plump:web" class="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Botão esquerda -->
      <button
        @click="prevSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Botão direita -->
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { Icon } from "@iconify/vue";
import { projects } from "@/composables/projects.js";

const currentIndex = ref(0);
const itemsPerView = ref(1); // quantos cards aparecem ao mesmo tempo

// detectar largura da tela e ajustar qtd de itens
function updateItemsPerView() {
  if (window.innerWidth >= 1024) {
    itemsPerView.value = 3; // desktop → 3 cards
  } else if (window.innerWidth >= 640) {
    itemsPerView.value = 2; // tablet → 2 cards
  } else {
    itemsPerView.value = 1; // mobile → 1 card
  }
}

onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", updateItemsPerView);
});
onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsPerView);
});

// total de "páginas" baseado na quantidade de itens visíveis
const totalSlides = computed(() =>
  Math.ceil(projects.length / itemsPerView.value)
);

function prevSlide() {
  currentIndex.value =
    currentIndex.value === 0 ? totalSlides.value - 1 : currentIndex.value - 1;
}

function nextSlide() {
  currentIndex.value =
    currentIndex.value === totalSlides.value - 1 ? 0 : currentIndex.value + 1;
}
</script>
