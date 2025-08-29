<template>
  <button
      :class="[
        'h-12 w-40 rounded-full px-4 flex items-center justify-center gap-2 text-white shadow transition-all duration-300 hover:scale-110 hover:shadow-lg',
        color
      ]"
  >
      <span class="text-xl md:text-2xl">
        <slot name="icon"></slot>
      </span>

      <span v-if="text" class="inline-block text-sm md:text-base font-medium">
        {{ text }}
      </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const buttonColorClass = computed(() => {
  return `${props.color}`;
});
</script>