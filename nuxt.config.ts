// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Tiago Fortaleza - Professional Page',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/tf.ico' }
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '../assets/css/tailwind.css'
  ],
  // ... outras configurações
})