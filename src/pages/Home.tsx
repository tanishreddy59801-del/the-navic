import { motion } from 'framer-motion';
import DiscoverPassions from '@/components/ui/hero-scroll-animation'
import { UserSearch, Handshake, Sparkles as SparkleIcon } from "lucide-react"
import { useAppContext } from "@/contexts/AppContext"
import { Footer } from "@/components/ui/footer"

export function Home() {
  const { setActiveTab } = useAppContext();
  return (
    <div className="w-full relative">
      <main className="relative w-full min-h-screen flex flex-col items-center justify-start px-6 pt-32 pb-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none transition-opacity duration-300 dark:opacity-50" />
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-500/30 dark:bg-blue-600/30 blur-[100px] mix-blend-multiply dark:mix-blend-lighten animate-blob" />
          <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full bg-purple-500/30 dark:bg-purple-600/30 blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[30%] w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full bg-emerald-400/20 dark:bg-emerald-600/20 blur-[120px] mix-blend-multiply dark:mix-blend-lighten animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center mt-10 md:mt-20 w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-800/50 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm tracking-wide shadow-sm"
          >
            🎉 Welcome to the future of learning
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]" 
            style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}
          >
            Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Knowledge.</span> <br className="hidden md:block" /> Not Money.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mb-10"
          >
            Join the premier community where skills are the only currency. Learn anything, teach what you know, and grow together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <button 
              onClick={() => setActiveTab(1)}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 active:scale-95"
            >
              Start Swapping
            </button>
            <button 
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 rounded-2xl font-bold text-lg transition-all hover:-translate-y-1 active:scale-95"
            >
              See how it works
            </button>
          </motion.div>
        </div>

        {/* Cinematic App Preview Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="relative z-10 w-full max-w-5xl mt-20 perspective-[2000px]"
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white/40 dark:bg-slate-800/40 backdrop-blur-3xl border border-white/60 dark:border-slate-700/60 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden shadow-2xl flex flex-col pt-4 px-4 md:pt-8 md:px-8" style={{ transform: "rotateX(5deg) translateZ(0)", transformOrigin: "bottom center" }}>
            {/* Browser/Window Header Mock */}
            <div className="w-full flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 shadow-inner"></div>
            </div>
            
            {/* Mock UI Content inside the glass panel */}
            <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900 rounded-t-2xl md:rounded-t-3xl border-x border-t border-slate-200 dark:border-slate-700 flex p-6 gap-6 relative overflow-hidden shadow-inner">
              {/* Mock Sidebar */}
              <div className="w-48 hidden md:flex flex-col gap-4">
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-3/4"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-full"></div>
                <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-lg w-5/6"></div>
              </div>
              {/* Mock Grid */}
              <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="h-40 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800/50 rounded-2xl shadow-sm"></div>
                <div className="h-40 bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800/50 rounded-2xl shadow-sm"></div>
                <div className="h-40 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 rounded-2xl shadow-sm hidden lg:block"></div>
                <div className="h-40 bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl shadow-sm"></div>
                <div className="h-40 bg-rose-100 dark:bg-rose-900/30 border border-rose-200 dark:border-rose-800/50 rounded-2xl shadow-sm"></div>
                <div className="h-40 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm hidden lg:block"></div>
              </div>

              {/* Gradient overlay to fade bottom */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </main>

      <DiscoverPassions />

      <section id="how-it-works" className="relative w-full bg-white dark:bg-slate-900 py-40 px-6 overflow-hidden transition-colors duration-300">
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

      <Footer />
    </div>
  )
}
