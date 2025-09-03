<template>
  <div class="container mx-auto flex h-screen items-center justify-center p-4">
    <div
      class="flex w-full max-w-2xl flex-col items-center justify-center gap-8 text-center sm:flex-row-reverse sm:text-left md:max-w-4xl"
    >
      <div class="order-first sm:order-last">
        <div class="h-48 w-48 overflow-hidden rounded-lg sm:h-64 sm:w-64">
          <img :src="img" alt="Contact Image" class="h-full w-full object-cover">
        </div>
      </div>

      <div class="order-last sm:order-first">
        <h2 class="mb-6 text-3xl font-bold sm:text-4xl text-white">Get in touch</h2>

        <div class="flex items-center justify-center gap-4 sm:justify-start text-white">
          <a
            href="https://www.linkedin.com/in/tiago-fortaleza-gai/"
            target="_blank"
            class="transition-colors hover:text-gray-400"
          >
            <Icon icon="mdi:linkedin" class="w-8 h-8 text-white-500" />
          </a>
          <a
            href="https://github.com/tiagofort"
            target="_blank"
            class="transition-colors hover:text-gray-400"
          >
            <Icon icon="mdi:github" class="w-8 h-8" />
          </a>
          <a
            href="https://wa.me/353830679963"
            target="_blank"
            class="transition-colors hover:text-gray-400"
          >
            <Icon icon="mdi:whatsapp" class="w-8 h-8 text-white-500" />
          </a>
          <Dialog class=" ml-n2 text-white"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from '@/components/Dialog.vue';
import { Icon } from "@iconify/vue";

const img = ref(null);
import('../assets/images/contact.png').then(module => {
  img.value = module.default;
});
</script>