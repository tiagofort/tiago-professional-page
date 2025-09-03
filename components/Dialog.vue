<template>
  <div class="flex items-center justify-center">
    <button
      @click="copyAndShowDialog"
      class="rounded-full bg-transparent text-white transition-colors hover:text-gray-300"
    >
      <Icon icon="mdi:email-outline" class="w-8 h-8 text-white-500" />
    </button>

    <div v-if="dialog" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl">
        <div class="border-b border-gray-200 pb-4 text-xl font-bold uppercase text-gray-800">
          Email Copied
        </div>

        <p class="mt-4 text-sm text-gray-600">
          My contact email was copied successfully. You just need to paste it (Ctrl+V) in the "to" field in your email provider if you want to contact me.
        </p>

        <p class="mt-2 text-right text-sm text-gray-600">
          Thank you
        </p>

        <div class="mt-4 flex justify-end space-x-2">
          <button @click="dialog = false" class="rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from "@iconify/vue";

const dialog = ref(false);
const email = 'tiagofortalezag@gmail.com';

const copyAndShowDialog = () => {
  navigator.clipboard.writeText(email)
    .then(() => {
      dialog.value = true;
    })
    .catch((error) => {
      console.error('Failed to copy text to clipboard:', error);
    });
};
</script>