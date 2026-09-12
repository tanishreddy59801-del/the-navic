# Navic - Product Design Documentation

![Navic Logo / Banner](https://thenavic.vercel.app/favicon.ico)

**Live Demo / Website URL:** [thenavic.vercel.app](https://thenavic.vercel.app)

> **Design Championship 2026** · Product · UI/UX · Motion

---

## 📖 About Navic
**Navic** is a skill-swap platform where people exchange knowledge instead of money — *"no money involved, just knowledge."* Every user is both teacher and learner, connected by a credit economy, scheduling, and direct chat. It's a fully working product demo (auth, marketplace, credits, schedule, chat, notifications, settings) in one animated, dark-mode-ready web app.

- **5+1** NAV MODULES
- **15** SKILL CATEGORIES
- **50–400** CREDIT RANGE
- **3** CORE FLOWS

---

## ⚡ Problem & Solution

### The Problem
- **Learning is expensive** and often solitary.
- **Expertise is underused** — no safe channel to share it.
- **Skill-barter lacks structure**, matching, and trust.

### The Solution
- **A reciprocal credit economy:** earn by teaching.
- **Structured matching**, scheduling & messaging.
- **A warm, human UI** that feels like connecting, not studying.

### Design Thesis
Skill exchange happens between peers, so the product should feel like a **conversation, not a transaction** — expressed through conversational copy, a hand-drawn mascot, generous rounded surfaces, and soft ambient colour.

*navic — "Share what you know and learn what you love."*

---

## 🔄 The Navic Journey (User Flow)
Six interlocking steps trace the complete skill-swap loop:

1. **Join Navic**
   Create an account and start with a 450-credit balance — no fees, ever.
2. **Discover Skills**
   Search and browse 15 categories — Web Dev, Design, Music, Languages & more.
3. **Enroll**
   Confirm your spot; credits are deducted and your balance updates instantly.
4. **Match & Chat**
   A peer is matched and a chat thread opens automatically to plan the swap.
5. **Learn & Grow**
   Take scheduled lessons, track your hours learned, and review your history.
6. **Teach & Earn**
   List your own skill, run classes, and earn credits back to keep the loop going.

---

## 🛠️ Design & Build Basics (Tech Stack)
**What the platform is built with:**
Navic is built with **React + Vite**, **Tailwind CSS**, **Framer Motion & GSAP**, and **sonner** — all hosted on **Vercel**.

### Try it — Demo Login
- **Website:** [https://thenavic.vercel.app](https://thenavic.vercel.app)
- **E-Mail:** `admin@test.com`
- **Password:** `admin123`

### App — What's inside
| Section | What it is & does |
| :--- | :--- |
| **Home** | The introduction to Navic. |
| **Discover** | The skill marketplace where members search and filter across categories to find courses they want to learn. |
| **My Space** | The personal dashboard showing stats, credit balance, schedule, history, and the member's own listed skills. |
| **Notifications** | The in-app alert centre that keeps members updated on messages, enrollments, and new skill matches. |
| **Chat** | Direct messaging where members coordinate skill-swap sessions and keep in touch with their matched instructors. |

---
---

## 📋 Competition Information
- **Creators / Participants:** Tanish, Diaptayan, and Devarsh
- **Category Level:** Senior (14-16 years)

## 🤖 AI Usage Log & Disclosure
**Disclosure:** We built this project from scratch, but we definitely used AI tools to help us code faster, figure out annoying bugs, and generate some of the boilerplate UI components. However, the actual idea, the design direction, the core architecture, and the problem-solving were all driven by us (Tanish, Diaptayan, and Devarsh).

| AI Tool Used | Why We Used It | What It Generated | Our Contribution & Modification |
| :--- | :--- | :--- | :--- |
| **Gemini / Antigravity** | Code Generation & Debugging | React components, Tailwind styling blocks, and some Framer Motion animations. | We conceptualized the core architecture and dictated the exact design system (like telling it to use glassmorphism and specific fonts). We rigorously tested the components, directed the AI to fix micro-animations when they looked bad, and manually integrated the generated code into our Vite setup. |
| **ChatGPT / Copilot** | UI/UX Ideas & Content | First drafts of the text for the landing page and some basic function logic. | We heavily edited and rewrote the text to fit our brand voice so it didn't sound like a robot. We also had to modify the logic it gave us to actually work with our specific state management. |

**Understanding & Ownership:**
Our team guided the entire development workflow. Even though AI helped us write some of the code faster, the problem statement, the design decisions, the way the components talk to each other, and the overall user journey were exclusively designed by us. We understand how our codebase works and can explain the purpose of the React components and Tailwind classes we used.
