# Navic - The Skill Swapping Platform

![Navic Logo / Banner](https://thenavic.vercel.app/favicon.ico)

**Live Demo / Hosting Link:** [thenavic.vercel.app](https://thenavic.vercel.app)

---

## 📋 Who We Are
- **Project Title:** Navic
- **Creators / Participants:** Tanish, Diaptayan, and Devarsh
- **Category Level:** Senior (14-16 years)

---

## 🎯 Why We Built This (The Problem & Theme)
Learning new, highly specialized skills—like coding, speaking a new language, or graphic design—is usually locked behind expensive courses, tutors, or paywalls. At the same time, so many talented people want to learn something new, but they don't realize that the knowledge they *already have* is incredibly valuable to someone else. 

There really isn't a good, accessible platform where people can just trade knowledge freely without money getting in the way.

## 👥 Who Is This For?
- **Students & Lifelong Learners:** People who want to learn new skills but don't have the budget for expensive classes.
- **Professionals & Experts:** People who want to trade their work expertise for knowledge in a totally different hobby or field.
- **Creatives & Hobbyists:** Anyone wanting to connect and exchange passions (like trading guitar lessons for cooking tips).

## 💡 Our Solution
We built **Navic**, a peer-to-peer skill-swapping web app. Instead of paying for classes, you list the skills you want to teach and the skills you want to learn. Our platform connects you with ideal matches so you can trade knowledge for knowledge. No money is involved—just pure educational exchange and building a community.

---

## 🗺️ How It Works (Architecture & User Flow)
**Sitemap:**
- `Home` - The landing page that explains what Navic is and how it works.
- `Discover` - A feed where you can browse potential matches and search for specific skills.
- `Chat` - A built-in messaging system to talk with your matches and negotiate your swap.
- `My Schedule` - A calendar to keep track of your upcoming learning sessions.
- `My Space` - Your personal dashboard to manage your profile and the skills you offer.

**User Flow:**
1. A user lands on the **Home** page and clicks "Get Started".
2. They log in or create an account through the Auth Modal.
3. They jump into the **Discover** feed to browse or search for a skill they want to learn.
4. When they find a good match, they hit "Request Swap".
5. Both users start talking in the **Chat** tab to figure out the details.
6. They schedule a session, which pops up in **My Schedule**.

---

## 🎨 Design Decisions & UI
We wanted Navic to look modern, clean, and premium. We specifically tried to avoid generic, boring templates.
- **Typography:** We used friendly, modern fonts (`Fredoka` and `Plus Jakarta Sans`) so the platform feels welcoming and fun, not like a boring school website.
- **Animations:** We added a lot of smooth, spring-based micro-animations (using Framer Motion and GSAP) on hover and scroll. It makes the website feel alive and highly interactive.
- **Glassmorphism:** We used blurred backgrounds, soft gradients, and shadows to give the UI a layered, cinematic look.
- **Dark Mode:** We built in a sleek dark mode because it reduces eye strain and just looks really cool.

---

## ⚙️ How We Built It (Tech Stack)
- **Frontend:** React 18
- **Build Tool:** Vite (for fast development and optimized builds)
- **Language:** TypeScript (to catch bugs early and keep our code clean)
- **Styling:** Tailwind CSS (made styling way faster without writing massive CSS files)
- **Animations:** Framer Motion (for physics-based UI animations)
- **Icons:** Lucide React
- **Hosting:** Vercel (for automatic deployments whenever we push to GitHub)

---

## 🤖 AI Usage Log & Disclosure

**Disclosure:** We built this project from scratch, but we definitely used AI tools to help us code faster, figure out annoying bugs, and generate some of the boilerplate UI components. However, the actual idea, the design direction, the core architecture, and the problem-solving were all driven by us (Tanish, Diaptayan, and Devarsh).

| AI Tool Used | Why We Used It | What It Generated | Our Contribution & Modification |
| :--- | :--- | :--- | :--- |
| **Gemini / Antigravity** | Code Generation & Debugging | React components, Tailwind styling blocks, and some Framer Motion animations. | We conceptualized the core architecture and dictated the exact design system (like telling it to use glassmorphism and specific fonts). We rigorously tested the components, directed the AI to fix micro-animations when they looked bad, and manually integrated the generated code into our Vite setup. |
| **ChatGPT / Copilot** | UI/UX Ideas & Content | First drafts of the text for the landing page and some basic function logic. | We heavily edited and rewrote the text to fit our brand voice so it didn't sound like a robot. We also had to modify the logic it gave us to actually work with our specific state management (`AppContext.tsx`). |

**Understanding & Ownership:**
Our team guided the entire development workflow. Even though AI helped us write some of the code faster, the problem statement, the design decisions, the way the components talk to each other, and the overall user journey were exclusively designed by us. We understand how our codebase works and can explain the purpose of the React components and Tailwind classes we used.
