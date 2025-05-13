# 🛏️ Fable Developer Task – Case Study Animation Interface

This is my submission for the **Fable Web Developer Task**, focused on building a seamless, animated transition between a project grid and a detailed case study page. The goal was to reflect Fable’s provided designs with fidelity, while enhancing the experience through smooth transitions and thoughtful interactions.

## 🎯 Task Overview

- Implement the **provided Figma designs**
- Prioritise **smooth transitions** between project → case study
- Focus on **animation, responsiveness**, and **pixel-accuracy**
- Embed **case study video** (Vimeo)
- Apply **creative improvements** where possible

## 🔗 Live Demo

👉 [View Live Demo](https://your-live-link.vercel.app)

## 📸 Screenshots

| Project Grid → Case Study | Mobile Layout |
|---------------------------|----------------|
| ![Demo](./screenshots/desktop.png) | ![Mobile](./screenshots/mobile.png) |

---

## 🧱 Tech Stack

- ⚛️ **React.js**
- 🎨 **Tailwind CSS** (for layout and responsiveness)
- 🎞️ **Framer Motion** (optional animation library – not required here)
- 🎥 **Vimeo Embed** for case study video
- 🌐 **Deployed via Vercel** (or Netlify)

---

## 🧠 Animation & UX Approach

- **Page Transition:** Currently handled with route-based component mounts. To extend, I would integrate `Framer Motion` for shared layout transitions.
- **Hero Image & Sections:** Smooth fades and scaling; responsive full-width layout using `object-cover`.
- **Video Embed:** Responsive Vimeo iframe in a `aspect-video` container.
- **Micro-interactions:** Hover effects on project thumbnails and buttons.
- **Back/Next Navigation:** Styled buttons with hover state and large tappable area.

---

## 📱 Responsiveness

- Used **Tailwind’s responsive utility classes** (`md:grid-cols-2`, `px-6`, etc.)
- Ensured images and videos scale using `w-full`, `object-cover`, and `aspect-video`
- On small screens:
  - Project details stack vertically
  - Grid collapses to 1 column
  - Typography and padding shrink gracefully

---

## 🚀 How to Run Locally

```bash
git clone https://github.com/yourusername/fable-case-study.git
cd fable-case-study
npm install
npm run dev
