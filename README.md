# 💻 Personal Portfolio & Blog

This is my personal website built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and Markdown-powered blog content. It serves as both a portfolio and a writing outlet, showcasing projects, skills, and personal reflections.

## 🚀 Features

- ⚡ Built with Astro for performance and clean structure
- 🎨 Styled with Tailwind CSS (green theme matching my vibe)
- 📝 Markdown blog with content collections
- 🧠 Typing animation in hero section
- 📂 Project detail pages (with GitHub & PDF links)
- 🧾 Downloadable CV + timeline for experience
- 📬 Contact modal with name/email/message

---

## 🧱 Tech Stack

| Feature                | Tech Used                 |
|------------------------|---------------------------|
| Framework              | Astro                     |
| Styling                | Tailwind CSS + Typography Plugin |
| Blog System            | `astro:content` collections |
| Deployment             | Vercel (via GitHub)       |
| Animations             | CSS + JS           |

---

## 🗂️ Architecture

```
src/
├── components/       → Layout.astro, Navbar.astro, etc.
├── content/          → blog/ (markdown posts)
│   └── config.ts     → blog schema (title, date, tags, ...)
├── pages/            → index.astro, blog.astro, [slug].astro
├── styles/           → global.css (Tailwind setup + custom animations)
public/               → profile picture, PDFs, assets
```

---

## 📘 Blog System (Astro Content Collections)

- Posts live in `src/content/blog/*.md`
- Defined collection in `src/content/config.ts`
- Used `getCollection('blog')` to list posts
- Dynamic routing via `blog/[slug].astro`
- Rendered Markdown with:

```astro
const { Content } = await post.render();
...
<div class="prose prose-primary">
  <Content />
</div>
```

---

## 🧠 What I Learned

- How to structure and deploy an Astro site from scratch
- How `astro:content` works and how to render Markdown safely
- How Tailwind's `prose` plugin is used in typography
- The importance of correctly placing static assets in `public/`
- How to create reusable layouts, components, and content systems

---

## 🔗 Live Site
**[View the live version on Vercel →](calisirportfolio.vercel.app/)**

Feel free to reach out, fork, or browse around.

---

© 2025 Ahmet Berk Calisir

