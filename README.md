# Portfolio Website

This project is a personal portfolio built with **Nuxt 3**, **Vue 3**, and **Tailwind CSS**.  
It showcases my skills, professional experience, and selected projects.

---

## 📱 Fully Responsive Design

![Responsive Preview](https://imagens-tiago.s3.eu-north-1.amazonaws.com/Screenshot+2026-04-24+234314.png)

---

## 🚀 Tech Stack

- **Framework:** Nuxt 3 (Vue 3)
- **Styling:** Tailwind CSS
- **Language:** JavaScript / TypeScript
- **Testing:** Vitest
- **Cloud & Deployment:** AWS (S3, CloudFront)
- **CI/CD:** GitHub Actions

---

## 📂 Project Structure

```
├── assets/
├── components/
├── composables/
├── layouts/
├── pages/
├── public/
├── .github/workflows/
│   └── deploy.yml
├── app.vue
├── nuxt.config.ts
├── tailwind.config.js
├── tsconfig.json
└── vitest.config.ts
```

---

## 📑 Features

- Responsive Design
- Dynamic Data via Composables
- Projects Showcase
- Interactive Contact Section
- Modern UI with Tailwind CSS

---

## 📦 Installation & Setup

```bash
git clone https://github.com/tiagofort/tiago-professional-page.git
cd tiago-professional-page
npm install
npm run dev
```

---

## ☁️ Deployment (AWS S3 + CloudFront)

This project uses a **static hosting architecture on AWS**:

- **Amazon S3** → Stores static files
- **CloudFront** → CDN + HTTPS
- **OAC (Origin Access Control)** → Secures S3 access

---

## 🏗️ Build Process

```bash
npm run generate
```

This generates:

```
.output/public
```

Only this folder is deployed to S3.

---

## 🪣 S3 Configuration

- Bucket is **private (no public access)**
- Static website hosting **disabled**
- Files uploaded from `.output/public`
- Encryption enabled (SSE-S3)
- Access only via CloudFront (OAC)

---

## 🌐 CloudFront Configuration

- Origin: S3 bucket
- Access: **OAC (Origin Access Control)**
- Default root object: `index.html`
- HTTPS enabled
- Global CDN

### SPA Routing Fix (Nuxt)

Custom error responses:

- 403 → `/index.html`
- 404 → `/index.html`

---

## 🔄 CI/CD Pipeline (GitHub Actions)

### 📁 Location

```
.github/workflows/deploy.yml
```

### ⚙️ Flow

On every push:

1. Install dependencies
2. Build project
3. Upload to S3
4. Invalidate CloudFront cache

---

## 📜 GitHub Actions Workflow

```yaml
name: Deploy Nuxt 3 to AWS

on:
  push:
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22

      - run: npm ci

      - run: npm run generate

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: YOUR_AWS_ROLE_ARN
          aws-region: eu-west-1

      - run: aws s3 sync .output/public s3://YOUR_BUCKET --delete

      - run: aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

---

## 🔐 Security

- Uses **GitHub OIDC authentication**
- No AWS credentials stored
- IAM Role with restricted permissions
- S3 is **not public**

---

## 🌍 Live Application

👉 https://d2hwdjexkuxjzy.cloudfront.net

---

## 🏆 Key Highlights

- CI/CD fully automated
- Secure AWS architecture
- CloudFront CDN distribution
- SPA routing handled correctly
- Production-ready setup

---

## 📬 Contact

Feel free to reach out via the contact section or GitHub.
