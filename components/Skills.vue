<template>
  <div class="container mx-auto p-4 md:p-10 bg-transparent">
    <div class="text-4xl font-bold md:text-5xl text-white">Skills</div>
    <div v-for="category in skills" :key="category.category" class="mb-24">
      <h3 class="mb-5 text-center text-2xl font-semibold md:text-3xl text-white">
        {{ category.category }}
      </h3>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <Badge v-for="skill in category.items" :key="skill.text" :text="skill.text" :color="skill.color">
          <template #icon>
            <svg v-if="skill.icon === 'javascript'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
              <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-12h4c1.104 0 2 .896 2 2v4c0 1.104-.896 2-2 2h-4c-1.104 0-2-.896-2-2v-4c0-1.104.896-2 2-2zm0 2v4h4v-4h-4z" />
            </svg>
            </template>
        </Badge>
      </div>
    </div>
  </div>
</template>

<script setup>
import Badge from '@/components/Badge.vue';
import { skills } from '@/composables/skills.js';
</script>