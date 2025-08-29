<template>
  <div class="container mx-auto py-10 space-y-32">
    <section id="home" class="scroll-mt-24">
      <About />
    </section>

    <section id="skills" class="scroll-mt-24">
      <Skills />
    </section>

    <section id="projects" class="scroll-mt-24">
      <Projects />
    </section>

    <section id="contact" class="scroll-mt-24">
      <Contact />
    </section>
  </div>
</template>

<script setup>
import About from '../components/About.vue';
import Skills from '../components/Skills.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';
</script>