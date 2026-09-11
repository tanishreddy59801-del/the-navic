import { HeroParallax } from "@/components/ui/hero-parallax"
import { UserSearch, Handshake, Sparkles as SparkleIcon } from "lucide-react"
import { useAppContext } from "@/contexts/AppContext"
import { CinematicFooter } from "@/components/ui/motion-footer"
import { UnderlineHero } from "@/components/ui/underline-hero"

const products = [
  {
    title: "Web Development",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Graphic Design",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Language Exchange",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Marketing Strategy",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Creative Writing",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Photography",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Data Science",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Public Speaking",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Music Production",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Business Planning",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "UI/UX Design",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Fitness Coaching",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Software Engineering",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Study Methods",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Career Mentoring",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
  },
];

export function Home() {
  const { setActiveTab } = useAppContext();
  return (
    <div className="w-full relative">
      <main className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none transition-opacity duration-300 dark:opacity-40" />
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/20 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[120px] animate-blob transition-colors duration-300" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/20 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[120px] animate-blob animation-delay-2000 transition-colors duration-300" />
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full bg-pink-400/20 dark:bg-pink-600/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[120px] animate-blob animation-delay-4000 transition-colors duration-300" />
        </div>

        {/* Hero Section */}
        <UnderlineHero />
      </main>

      <HeroParallax products={products} />

      <section className="relative w-full bg-white dark:bg-slate-900 py-16 pt-8 px-6 overflow-hidden transition-colors duration-300">
        <div className="relative z-10 max-w-6xl mx-auto pt-16">
          <h2 className="text-4xl md:text-7xl font-black text-center mb-16 md:mb-24 text-slate-900 dark:text-white tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Navic</span> Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-16">
            {/* Card 1 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100/80 dark:border-slate-700 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.25)] dark:shadow-none hover:-translate-y-4 hover:-rotate-2 transition-all duration-300">
              <div className="absolute -top-8 -right-6 w-20 h-20 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center font-black text-4xl text-blue-600 dark:text-blue-400 border-[6px] border-white dark:border-slate-800 shadow-xl rotate-12 group-hover:rotate-0 transition-transform" style={{ fontFamily: "'Fredoka', sans-serif" }}>1</div>
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-blue-600/30">
                <UserSearch size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">Discover</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Find people offering the skills you want to learn. Browse profiles, check out their expertise, and see what they're looking for in return.</p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100/80 dark:border-slate-700 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.25)] dark:shadow-none hover:-translate-y-4 transition-all duration-300 translate-y-0 md:translate-y-12">
              <div className="absolute -top-8 -right-6 w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center font-black text-4xl text-purple-600 dark:text-purple-400 border-[6px] border-white dark:border-slate-800 shadow-xl -rotate-6 group-hover:rotate-0 transition-transform" style={{ fontFamily: "'Fredoka', sans-serif" }}>2</div>
              <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 -rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-purple-600/30">
                <Handshake size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">Match & Swap</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Offer your own unique skills in exchange. Once there's a match, you both agree to a skill swap. No money involved, just knowledge.</p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100/80 dark:border-slate-700 shadow-[0_20px_50px_-20px_rgba(16,185,129,0.25)] dark:shadow-none hover:-translate-y-4 hover:rotate-2 transition-all duration-300">
              <div className="absolute -top-8 -right-6 w-20 h-20 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center font-black text-4xl text-emerald-600 dark:text-emerald-400 border-[6px] border-white dark:border-slate-800 shadow-xl rotate-6 group-hover:rotate-0 transition-transform" style={{ fontFamily: "'Fredoka', sans-serif" }}>3</div>
              <div className="w-16 h-16 bg-emerald-500 dark:bg-emerald-400 rounded-2xl flex items-center justify-center text-white mb-6 rotate-3 group-hover:rotate-0 transition-transform shadow-lg shadow-emerald-500/30">
                <SparkleIcon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4 tracking-tight">Learn & Grow</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Jump into a collaborative learning environment. Teach what you love, master new passions, and build a network of talented friends.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-[70vh] bg-slate-900 flex flex-col items-center justify-center px-6 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-[8rem] font-black tracking-tight text-white leading-[1.1] mb-12 uppercase" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
            Get Started <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">Now !</span>
          </h2>
          <button onClick={() => setActiveTab(1)} className="px-8 py-4 md:px-12 md:py-6 rounded-full bg-white text-slate-900 font-extrabold text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] cursor-pointer">
            Join Navic Today
          </button>
        </div>
      </section>

      <CinematicFooter />
    </div>
  )
}
