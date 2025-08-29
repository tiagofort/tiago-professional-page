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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.763s.784-1.763 1.75-1.763 1.75.79 1.75 1.763-.783 1.763-1.75 1.763zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.355 7 2.091v7.144z" />
            </svg>
          </a>
          <a
            href="https://github.com/tiagofort"
            target="_blank"
            class="transition-colors hover:text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.371 3.284 9.944 7.931 11.815.688.124.938-.299.938-.664v-2.195c-3.197.697-3.951-1.423-3.951-1.423-.521-1.325-1.272-1.681-1.272-1.681-1.037-.704.079-.69.079-.69 1.144.08 1.748 1.18.232 1.737-1.121.735-2.31.209-2.782-.047-.238-.697-.927-1.423-1.75-1.921-.692-.418-1.754-.42-1.754-.42-1.077-.076.082-.075.082-.075 1.259.088 2.378 1.294 2.871 2.392 1.328 2.868 3.55 1.628 4.606 1.24.128-.971.517-1.628.931-2.002-3.379-.39-6.931-1.688-6.931-7.502 0-1.654.593-2.992 1.571-4.045-.158-.39-.684-1.918.15-4.032 0 0 1.288-.413 4.226 1.579 1.22-.341 2.528-.511 3.826-.517 1.298.006 2.607.176 3.827.517 2.936-2.007 4.225-1.579 4.225-1.579.835 2.114.309 3.642.152 4.032.979 1.053 1.569 2.391 1.569 4.045 0 5.823-3.557 7.108-6.942 7.501.522.45.922 1.206.922 2.432v3.597c0 .366.25.792.945.663 4.646-1.872 7.929-6.444 7.929-11.815 0-6.627-5.372-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://wa.me/353830679963"
            target="_blank"
            class="transition-colors hover:text-gray-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-8 w-8">
              <path d="M.057 18.068l1.642-6.044c-.754-1.685-1.157-3.6-1.157-5.589 0-5.529 4.49-10.019 10.02-10.019 2.923 0 5.617 1.258 7.525 3.284l1.378-.659c-2.222-2.311-5.263-3.805-8.903-3.805-6.195 0-11.238 5.042-11.238 11.237 0 2.224.653 4.312 1.835 6.077l-1.996 7.411 7.644-1.789c1.725 1.135 3.692 1.764 5.768 1.764 6.195 0 11.238-5.042 11.238-11.237 0-3.385-1.487-6.446-3.899-8.618l-.514-.499c-2.411-2.172-5.719-3.535-9.425-3.535-6.195 0-11.238 5.042-11.238 11.237 0 2.158.625 4.195 1.776 5.926l-.499 2.059-2.059.499zm11.121-21.282c-5.495 0-9.96 4.465-9.96 9.96s4.465 9.96 9.96 9.96 9.96-4.465 9.96-9.96-4.465-9.96-9.96-9.96zm.116 16.488c-.687 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25 1.25.563 1.25 1.25-.563 1.25-1.25 1.25zm0-2.5c-.687 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25 1.25.563 1.25 1.25-.563 1.25-1.25 1.25zm0-2.5c-.687 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25 1.25.563 1.25 1.25-.563 1.25-1.25 1.25zm0-2.5c-.687 0-1.25-.563-1.25-1.25s.563-1.25 1.25-1.25 1.25.563 1.25 1.25-.563 1.25-1.25 1.25z" />
            </svg>
          </a>
          <Dialog class="text-white"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from '@/components/Dialog.vue';

const img = ref(null);
import('../assets/images/contact.png').then(module => {
  img.value = module.default;
});
</script>