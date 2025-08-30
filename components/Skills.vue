<template>
  <div class="container mx-auto p-4 md:p-10">
    <div class="text-4xl font-bold md:text-5xl text-white mb-10">Skills</div>

    <div v-for="category in skills" :key="category.category" class="mb-24">
      <h3
        class="mb-5 text-center text-2xl font-semibold md:text-3xl text-white"
      >
        {{ category.category }}
      </h3>

      <div
        class="grid gap-6 grid-cols-1 <!-- padrão: 1 por linha --> sm:grid-cols-2 <!-- em telas pequenas: 2 por linha --> lg:grid-cols-3 <!-- em telas grandes: 3 por linha --> place-items-center"
      >
        <Badge
          v-for="item in category.items"
          :key="item.text"
          :skill="item.text"
          :icon="item.icon"
          :color="item.color"
          :since="item.since"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from "@/components/Badge.vue";
import { skills } from "@/composables/skills.js";
</script>
