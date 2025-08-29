<template>
  <header class="fixed top-0 left-0 z-50 w-full bg-black text-white">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
      <nav class="hidden h-full sm:flex sm:items-center sm:gap-4">
        <NuxtLink
          v-for="link in links"
          :key="link.title"
          :to="link.id_scroll"
          class="font-medium hover:text-gray-400 transition-colors"
          @click="scrollToSection(link.id_scroll)"
        >
          {{ link.title }}
        </NuxtLink>
      </nav>

      <div class="flex items-center sm:hidden">
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white"
        >
          <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
          <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </header>
  
  <MobileMenu
    :links="links"
    :is-open="isMobileMenuOpen"
    @close="isMobileMenuOpen = false"
  />
</template>

<script setup>
import { ref } from 'vue';
import MobileMenu from './MobileMenu.vue';

const isMobileMenuOpen = ref(false);

const links = [
  { title: 'Home', id_scroll: '#home' },
  { title: 'Skills', id_scroll: '#skills' },
  { title: 'Projects', id_scroll: '#projects' },
  { title: 'Contact', id_scroll: '#contact' }
];

const scrollToSection = (sectionId) => {
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>