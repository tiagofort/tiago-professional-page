<template>
  <div class="p-4 bg-white shadow rounded-2xl w-70 text-center">
    <div class="flex flex-col items-center">
      <div class="mb-2 font-semibold">{{ skill }}</div>
      <div class="flex gap-1 flex-wrap justify-center">
        <span
          v-for="n in totalYears"
          :key="n"
          class="w-3 h-3 rounded-sm border border-gray-300"
          :class="{
            [color]: n <= years,
            'bg-gray-200': n > years,
          }"
        ></span>
      </div>
      <p class="text-xs text-gray-500 mt-2">
        Experience: {{ years }} years of {{ totalYears }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useExperience } from "../composables/experience.js";

const props = defineProps({
  skill: String,
  since: Number,
  color: String,
  icon: String,
});

const { totalYears, getYearsOfExperience } = useExperience(2011);

const years = computed(() => getYearsOfExperience(props.since));
</script>
