# Portfolio Website

This project is a personal portfolio built with **Nuxt 3**, **Vue 3**, and **Tailwind CSS**.  
It showcases my skills, professional experience, and selected projects, providing an overview of my profile as a developer.

---

## 🚀 Tech Stack

- **Framework:** Nuxt 3 (Vue 3)
- **Styling:** Tailwind CSS
- **Language:** JavaScript / TypeScript
- **Testing:** Vitest

---

## 📂 Project Structure

```
├── assets/ # Static assets such as images
├── components/ # Vue components used across the app
│ ├── About.vue # About me section with a short summary and career goals
│ ├── Badge.vue # Renders each skill (fed by composables/skills.js)
│ ├── Contact.vue # Contact information and links
│ ├── Dialog.vue # Dialog to show "email copied" message in Contact section
│ ├── Footer.vue # Footer of the website
│ ├── Header.vue # Header with navigation (Home, Skills, Projects, Contact)
│ ├── MobileMenu.vue # Mobile version of the Header for smaller screens
│ ├── Projects.vue # List of projects with GitHub and/or website links
│ └── Skills.vue # Skills section with years of experience
│
├── composables/ # Data and utility logic
│ ├── experience.js # Function to calculate years of experience
│ ├── projects.js # Array of project data used in Projects section
│ └── skills.js # Array of skills data used in Skills section
│
├── layouts/
│ └── default.vue # Default layout wrapping all pages
│
├── pages/
│ └── index.vue # Main entry page of the portfolio
│
├── public/ # Public static files
│
├── app.vue # Root Vue component
├── nuxt.config.ts # Nuxt configuration file
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── vitest.config.ts # Vitest configuration
```


---

## 📑 Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **About Section:** Quick overview of my background, skills, and career goals.
- **Skills Section:** Visual representation of my technical stack, with years of experience.
- **Projects Section:** Highlighted personal and professional projects with GitHub and live demo links.
- **Contact Section:** Direct ways to reach me, including an interactive dialog that confirms when an email address is copied.
- **Dynamic Data:** Skills and projects are dynamically loaded from composables (`skills.js`, `projects.js`).

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

```bash
git https://github.com/tiagofort/tiago-professional-page.git
cd tiagofort
npm install
