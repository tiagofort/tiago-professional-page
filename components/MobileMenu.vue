<template>
  <nav
    :class="[
      'fixed inset-y-0 right-0 z-50 w-64 bg-zinc-900 shadow-lg transform transition-transform duration-300 ease-in-out',
      isOpen ? 'translate-x-0' : 'translate-x-full'
    ]"
  >
    <div class="flex justify-end p-4">
      <button @click="$emit('close')" class="rounded-full bg-zinc-800 p-2 text-white">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <ul class="flex flex-col gap-y-4 p-4 text-white">
      <li v-for="link in links" :key="link.title">
        <NuxtLink
          :to="link.id_scroll"
          @click="$emit('close'); scrollToSection(link.id_scroll)"
          class="block text-xl font-semibold hover:text-gray-400 transition-colors"
        >
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>

    <div class="p-4 mt-8 text-white">
      <h3 class="mb-4 text-lg font-semibold">Get in Touch</h3>
      <div class="flex gap-4">
        <a href="https://www.linkedin.com/in/tiago-fortaleza-gai/" target="_blank" class="hover:text-gray-400 transition-colors">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            </svg>
        </a>
        <a href="https://github.com/tiagofort" target="_blank" class="hover:text-gray-400 transition-colors">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            </svg>
        </a>
        <a href="https://wa.me/353830679963" target="_blank" class="hover:text-gray-400 transition-colors">
          <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            </svg>
        </a>
        <button class="hover:text-gray-400 transition-colors">
          </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  links: {
    type: Array,
    required: true
  },
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

// Função para scroll to section
const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>