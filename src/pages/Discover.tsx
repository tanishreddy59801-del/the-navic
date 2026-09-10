import React, { useState } from 'react';
import { Clock, ArrowRight, Coins } from 'lucide-react';
import { AnimatedSearchBar } from '@/components/ui/animated-search-bar';
import { useAppContext } from '@/contexts/AppContext';

const categories = ["All", "Web Dev", "Design", "Music", "Languages", "Culinary", "Fitness"];

export function Discover() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { discoverSkills, buySkill } = useAppContext();

  const filteredSkills = activeCategory === "All" 
    ? discoverSkills 
    : discoverSkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-24 px-6 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[80px]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-400/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header & Search */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-800 dark:text-white mb-6 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Skills</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl font-medium transition-colors duration-300">Find the perfect match. Learn something new and teach what you love.</p>
          
          <AnimatedSearchBar />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="group bg-white dark:bg-slate-800 rounded-3xl p-6 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/30 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white leading-tight mb-2">{skill.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider
                      ${skill.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : ''}
                      ${skill.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' : ''}
                      ${skill.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : ''}
                      ${skill.color === 'amber' ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : ''}
                      ${skill.color === 'rose' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' : ''}
                    `}>
                      {skill.category}
                    </span>
                    <span className="text-sm font-bold text-slate-400 dark:text-slate-500">•</span>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1">
                      ⭐ {skill.rating} <span className="text-slate-400 font-medium">({skill.reviews})</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-6 flex-grow">
                {skill.description}
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-500 dark:text-slate-400 text-xs shrink-0">
                    {skill.instructor?.[0] || 'A'}
                 </div>
                 <span className="text-sm font-bold text-slate-700 dark:text-slate-300">By {skill.instructor || 'Anonymous'}</span>
              </div>

              {/* Footer / CTA */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-700 mt-auto flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-lg">
                    <Coins size={18} strokeWidth={2.5} />
                    <span>{skill.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 font-bold text-xs">
                    <Clock size={12} strokeWidth={2.5} />
                    <span>{skill.classes}x {skill.duration}m</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => buySkill(skill)}
                  className={`px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-white
                    ${skill.color === 'blue' ? 'bg-blue-600 shadow-lg shadow-blue-600/30' : ''}
                    ${skill.color === 'purple' ? 'bg-purple-600 shadow-lg shadow-purple-600/30' : ''}
                    ${skill.color === 'emerald' ? 'bg-emerald-600 shadow-lg shadow-emerald-600/30' : ''}
                    ${skill.color === 'amber' ? 'bg-amber-500 shadow-lg shadow-amber-500/30' : ''}
                    ${skill.color === 'rose' ? 'bg-rose-500 shadow-lg shadow-rose-500/30' : ''}
                  `}
                >
                  Buy <ArrowRight size={16} strokeWidth={3} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
