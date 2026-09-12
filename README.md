# Navic - The Premier Skill Swapping Platform

![Navic Logo / Banner](https://thenavic.vercel.app/favicon.ico)

**Live Demo / Hosting Link:** [thenavic.vercel.app](https://thenavic.vercel.app)

---

## 📋 Participant Information
- **Project Title:** Navic
- **Participant Name:** Tanish Reddy
- **Category Level:** Senior (14-16 years)

---

## 🎯 Theme Analysis & Problem Statement
**Problem Statement:** 
Learning new, highly specialized skills (like programming, a new language, or graphic design) is often locked behind expensive courses, tutors, or paywalls. Simultaneously, many talented individuals want to learn a new skill but don't realize that the knowledge they *already possess* is highly valuable to someone else. There is a lack of accessible platforms where knowledge can be traded freely without monetary barriers.

## 👥 Target Users
- **Lifelong Learners & Students:** Individuals eager to acquire new skills without financial constraints.
- **Professionals & Experts:** People looking to trade their domain expertise for knowledge in a completely different field.
- **Hobbyists:** Creatives wanting to connect and exchange passions (e.g., trading guitar lessons for cooking tips).

## 💡 Proposed Solution
**Navic** is a decentralized, peer-to-peer skill-swapping web application. Instead of paying for classes, users can list the skills they want to teach and the skills they want to learn. The platform connects them with ideal matches, allowing them to trade knowledge for knowledge. No money is involved—just pure educational exchange and community building.

---

## 🗺️ Information Architecture & User Flow
**Sitemap:**
- `Home` - Landing page with cinematic hero, feature breakdown, and call-to-action.
- `Discover` - Feed of potential matches and a dynamic search bar to find specific skills.
- `Chat` - Built-in real-time messaging interface for negotiating swaps and communication.
- `My Schedule` - Calendar integration to track upcoming learning sessions.
- `My Space` - User profile dashboard to manage offered and requested skills.

**User Flow Diagram:**
1. User lands on the **Home** page and clicks "Get Started".
2. User creates an account/logs in via the **Auth Modal**.
3. User browses the **Discover** feed or searches for a specific skill.
4. User finds a match and clicks "Request Swap".
5. Both users enter the **Chat** interface to negotiate terms.
6. A session is scheduled and appears in **My Schedule**.

---

## 🎨 Design Decisions & UI Concepts
The design philosophy behind Navic is centered around modern aesthetics, high usability, and a premium feel:
- **Typography-First Design:** Utilizing modern, friendly fonts (`Fredoka` and `Plus Jakarta Sans`) to make the platform feel welcoming rather than rigidly academic.
- **Micro-interactions:** Extensive use of smooth, spring-based animations on hover and scroll (powered by Framer Motion) to make the UI feel alive and responsive.
- **Glassmorphism & Depth:** Using blurred backgrounds, soft gradients, and subtle shadows to create a layered, cinematic aesthetic.
- **Dark Mode Support:** Full integration of a sleek dark mode for reduced eye strain and a premium look.

---

## ⚙️ Technical Approach
**Tech Stack:**
- **Frontend Framework:** React 18
- **Build Tool:** Vite (for rapid HMR and optimized production builds)
- **Language:** TypeScript (for type safety and robust code architecture)
- **Styling:** Tailwind CSS (for highly customizable, utility-first styling)
- **Animations:** Framer Motion (for spring physics and layout animations)
- **Icons:** Lucide React
- **Hosting:** Vercel (CI/CD automated deployment)

---

## 🤖 AI Usage Log & Disclosure

**Disclosure:** This project was developed with the assistance of AI tools for rapid prototyping, UI component generation, and debugging, while maintaining strict architectural oversight and creative direction by the student.

| AI Tool Used | Purpose of Use | Output Generated | Student Contribution & Modification |
| :--- | :--- | :--- | :--- |
| **Gemini / Antigravity** | Code Generation & Debugging | React components, Tailwind layouts, Framer Motion animations. | Conceptualized the core architecture. Dictated the exact design system (glassmorphism, specific fonts). Rigorously tested components, directed the AI to refine micro-animations, and integrated the generated code into the Vite ecosystem. |
| **ChatGPT / Copilot** | UI/UX Suggestions & Content | Copywriting for landing page, boilerplate function logic. | Edited and rewrote copy to fit the brand voice. Ensured the logic fit the specific routing and state-management needs of the `AppContext`. |

**Understanding & Ownership:**
I (Tanish) guided the development workflow entirely. While AI assisted in writing boilerplate and styling blocks, the problem statement, design decisions, component structuring, state management (`AppContext.tsx`), and overall user journey were exclusively designed and directed by me. I can fully explain the purpose and functionality of every React component and Tailwind class used in this project.
