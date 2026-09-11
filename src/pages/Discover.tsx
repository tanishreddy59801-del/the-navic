import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, Coins, Code, Palette, Music, Globe, ChefHat, Dumbbell, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSearchBar } from '@/components/ui/animated-search-bar';
import { useAppContext } from '@/contexts/AppContext';
import { Footer } from '@/components/ui/footer';

const categories = [
  { name: "All", icon: <LayoutGrid size={16} /> },
  { name: "Web Dev", icon: <Code size={16} /> },
  { name: "Design", icon: <Palette size={16} /> },
  { name: "Music", icon: <Music size={16} /> },
  { name: "Languages", icon: <Globe size={16} /> },
  { name: "Culinary", icon: <ChefHat size={16} /> },
  { name: "Fitness", icon: <Dumbbell size={16} /> }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

function SkeletonCard() {
  return (
    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white dark:border-slate-700 shadow-sm flex flex-col h-[400px] overflow-hidden relative animate-pulse">
      <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
        <div className="w-full">
          <div className="h-6 w-24 bg-slate-200 dark:bg-slate-700 rounded-xl mb-4"></div>
          <div className="h-8 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-xl mb-3"></div>
          <div className="h-6 w-20 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        </div>
      </div>
      <div className="flex-grow space-y-2 mb-8">
        <div className="h-4 w-full bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        <div className="h-4 w-5/6 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
      </div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
      </div>
      <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50 mt-auto flex items-center justify-between">
        <div className="space-y-2">
          <div className="h-6 w-16 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
          <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded-md"></div>
        </div>
        <div className="h-12 w-24 bg-slate-200 dark:bg-slate-700 rounded-2xl"></div>
      </div>
    </div>
  );
}

export function Discover() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { discoverSkills, buySkill } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = discoverSkills.filter(skill => {
    const matchesCategory = activeCategory === "All" || skill.category === activeCategory;
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-24 px-6 transition-colors duration-300 overflow-hidden">
      {/* Grid & Blob Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none transition-opacity duration-300 dark:opacity-40" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 dark:bg-blue-600/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-400/20 dark:bg-purple-600/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header & Search */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 dark:text-white mb-6 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Skills</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl font-medium transition-colors duration-300">Find the perfect match. Learn something new and teach what you love.</p>
          
          <AnimatedSearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10 scale-105 ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ring-slate-900 dark:ring-white"
                  : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-md text-slate-600 dark:text-slate-300 border-2 border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <span className={activeCategory === cat.name ? "text-white dark:text-slate-900" : "text-slate-400 dark:text-slate-500"}>
                {cat.icon}
              </span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : filteredSkills.length === 0 ? (
          <div className="text-center py-20 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-[3rem] border-2 border-dashed border-slate-200 dark:border-slate-700">
            <Globe className="mx-auto mb-6 text-slate-300 dark:text-slate-600" size={64} />
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">No skills found</h2>
            <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or selecting a different category.</p>
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredSkills.map((skill) => (
              <motion.div variants={itemVariants} key={skill.id} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full overflow-hidden relative">
                
                {/* Subtle top gradient glow on card based on color */}
                <div className={`absolute top-0 left-0 w-full h-32 opacity-20 dark:opacity-10 pointer-events-none bg-gradient-to-b to-transparent
                  ${skill.color === 'blue' ? 'from-blue-500' : ''}
                  ${skill.color === 'purple' ? 'from-purple-500' : ''}
                  ${skill.color === 'emerald' ? 'from-emerald-500' : ''}
                  ${skill.color === 'amber' ? 'from-amber-500' : ''}
                  ${skill.color === 'rose' ? 'from-rose-500' : ''}
                `} />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
                  <div>
                    <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 transition-colors
                      ${skill.color === 'blue' ? 'bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : ''}
                      ${skill.color === 'purple' ? 'bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' : ''}
                      ${skill.color === 'emerald' ? 'bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' : ''}
                      ${skill.color === 'amber' ? 'bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300' : ''}
                      ${skill.color === 'rose' ? 'bg-rose-100/80 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300' : ''}
                    `}>
                      {skill.category}
                    </span>
                    <h3 className="font-bold text-2xl text-slate-800 dark:text-white leading-tight mb-3">{skill.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">
                        ⭐ {skill.rating} <span className="text-slate-400 font-medium ml-0.5">({skill.reviews})</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8 flex-grow relative z-10">
                  {skill.description}
                </p>
                
                <div className="flex items-center gap-3 mb-8 relative z-10">
                   {skill.instructorAvatarUrl ? (
                     <div className={`w-12 h-12 rounded-full p-[2px] bg-gradient-to-br
                       ${skill.color === 'blue' ? 'from-blue-400 to-blue-600' : ''}
                       ${skill.color === 'purple' ? 'from-purple-400 to-purple-600' : ''}
                       ${skill.color === 'emerald' ? 'from-emerald-400 to-emerald-600' : ''}
                       ${skill.color === 'amber' ? 'from-amber-400 to-amber-600' : ''}
                       ${skill.color === 'rose' ? 'from-rose-400 to-rose-600' : ''}
                     `}>
                       <img src={skill.instructorAvatarUrl} alt={skill.instructor} className="w-full h-full object-cover rounded-full border-2 border-white dark:border-slate-800" />
                     </div>
                   ) : (
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center font-bold text-slate-500 dark:text-slate-300 shadow-inner">
                        {skill.instructor?.[0] || 'A'}
                     </div>
                   )}
                   <span className="text-sm font-bold text-slate-700 dark:text-slate-300">By {skill.instructor || 'Anonymous'}</span>
                </div>

                {/* Footer / CTA */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-700/50 mt-auto flex items-center justify-between relative z-10">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-xl">
                      <Coins size={20} strokeWidth={2.5} />
                      <span>{skill.price}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 font-bold text-xs">
                      <Clock size={12} strokeWidth={2.5} />
                      <span>{skill.classes}x {skill.duration}m</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => buySkill(skill)}
                    className={`px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-white
                      ${skill.color === 'blue' ? 'bg-blue-600 shadow-xl shadow-blue-600/30 hover:bg-blue-500' : ''}
                      ${skill.color === 'purple' ? 'bg-purple-600 shadow-xl shadow-purple-600/30 hover:bg-purple-500' : ''}
                      ${skill.color === 'emerald' ? 'bg-emerald-600 shadow-xl shadow-emerald-600/30 hover:bg-emerald-500' : ''}
                      ${skill.color === 'amber' ? 'bg-amber-500 shadow-xl shadow-amber-500/30 hover:bg-amber-400' : ''}
                      ${skill.color === 'rose' ? 'bg-rose-500 shadow-xl shadow-rose-500/30 hover:bg-rose-400' : ''}
                    `}
                  >
                    Buy <ArrowRight size={18} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}
