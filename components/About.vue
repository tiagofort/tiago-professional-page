<template>
  <div class="container mx-auto flex min-h-screen items-start justify-center p-4 md:p-10 lg:p-16">
  <div
    class="flex flex-col items-center justify-center gap-8 rounded-xl bg-transparent p-4 text-center md:flex-row md:p-10 md:text-left"
  >
    <!-- Imagem -->
    <div class="flex-shrink-0">
      <div class="h-48 w-48 overflow-hidden rounded-full">
        <img :src="avatar" alt="User Avatar" class="h-full w-full object-cover">
      </div>
    </div>

    <!-- Texto -->
    <div class="flex max-w-2xl flex-col justify-center text-white">
      <h1 class="mb-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
        {{ name }}
      </h1>
      <h2 class="mb-6 text-lg font-semibold sm:text-xl lg:text-2xl">
        {{ definition }}
      </h2>
      
      <h3 class="mb-3"> {{ greetings }} </h3>
      <p class="text-gray-300 text-sm leading-relaxed sm:text-base md:text-lg mb-3 text-justify indent-8">
        {{ firstParagraph }}
      </p>
      <p class="text-gray-300 text-sm leading-relaxed sm:text-base md:text-lg mb-3 text-justify indent-8">
        {{ secondParagraph }}
      </p>
      <p class="text-gray-300 text-sm leading-relaxed sm:text-base md:text-lg mb-3 text-justify indent-8">
        {{ thirdParagraph }}
      </p>
      <p class="text-gray-300 text-sm leading-relaxed sm:text-base md:text-lg mb-3 text-justify indent-8">
        {{ fourthParagraph }}
      </p>
      <p class="text-gray-300 text-sm leading-relaxed sm:text-base md:text-lg mb-3">
        {{ conclusion }}
      </p>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

// Use a dynamic import for better performance
const avatar = ref(null);
import('../assets/images/badge.jpg').then(module => {
  avatar.value = module.default;
});

const name = 'Tiago Fortaleza Gai';
const definition = 'Full Stack Developer';
const greetings = "Hello, and welcome to my portfolio!"
const firstParagraph =
'I’m a software developer with over a decade of experience in programming, having started my career back in 2011.'+
'Throughout this journey, I’ve worked with several technologies that shaped my foundation as a developer and gave me'+
'a solid understanding of how to design, build, and deliver reliable software solutions.';
const secondParagraph = 
'In recent years, I’ve been fully focused on modern web development, specializing in JavaScript and its ecosystem. I'+
'work with technologies such as TypeScript, Vue, Nuxt, React, Node.js, Express, NestJS, MongoDB, TailwindCSS, CSS, and HTML.'+
' My skills allow me to build applications that are not only functional but also scalable, maintainable, and user-friendly.';
const thirdParagraph =
'What sets me apart is the combination of my strong professional background and my passion for continuous learning. While I may'+
'be venturing into new technologies that differ from those I worked with earlier in my career, I bring the maturity, adaptability,'+
' and problem-solving mindset of a seasoned developer. Because of this, I’m genuinely happy and motivated to embrace entry-level'+
'opportunities in modern stacks, as they allow me to grow while proving the value of my past experience in a fresh context.';
const fourthParagraph =
'As you’ll see in the Projects section, I already have several applications running in production, reflecting both my technical'+
'ability and my commitment to delivering real-world results.';
const fifthParagraph =
'I’m excited about collaborating on challenging projects, contributing to innovative teams, and building digital solutions that make an impact.';
const conclusion =
'🚀 Let’s build something great together!'
</script>