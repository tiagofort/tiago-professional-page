<template>
  <footer class="w-full bg-black py-4 text-center text-white">
    <div class="container mx-auto">
      <span>Tiago Fortaleza Gai&copy; - {{ currentYear }}</span>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>