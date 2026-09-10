import React, { useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { AnimatedSearchBar } from '@/components/ui/animated-search-bar';

const categories = ["All", "Web Dev", "Design", "Music", "Languages", "Culinary", "Fitness"];

const mockUsers = [
  {
    id: 1,
    name: "Alex Johnson",
    category: "Web Dev",
    description: "I'll teach you React and Tailwind CSS from scratch. Let's build some cool interfaces together!",
    timeRequired: "2 hrs/week",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200",
    color: "blue"
  },
  {
    id: 2,
    name: "Sarah Chen",
    category: "Music",
    description: "Experienced pianist willing to swap piano lessons for conversational Spanish practice.",
    timeRequired: "1 hr/week",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    color: "purple"
  },
  {
    id: 3,
    name: "Marcus Cole",
    category: "Design",
    description: "UI/UX designer here to help you master Figma and design systems. Looking for coding help.",
    timeRequired: "3 hrs/week",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200",
    color: "emerald"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    category: "Culinary",
    description: "Professional chef offering authentic Mexican cooking classes. Open to learning SEO.",
    timeRequired: "1.5 hrs/week",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    color: "blue"
  },
  {
    id: 5,
    name: "David Kim",
    category: "Languages",
    description: "Native Korean speaker. I can help you with pronunciation and grammar. Want to learn guitar.",
    timeRequired: "1 hr/week",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    color: "purple"
  },
  {
    id: 6,
    name: "Maya Patel",
    category: "Fitness",
    description: "Certified personal trainer. I'll build you a custom workout plan in exchange for video editing.",
    timeRequired: "2 hrs/week",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    color: "emerald"
  },
];

export function Discover() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full min-h-screen bg-slate-50 relative pt-32 pb-24 px-6">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/10 mix-blend-multiply filter blur-[80px]" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-400/10 mix-blend-multiply filter blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header & Search */}
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Skills</span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl font-medium">Find the perfect match. Learn something new and teach what you love.</p>
          
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
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockUsers.map((user) => (
            <div key={user.id} className="group bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-xl shadow-slate-200/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <img src={user.image} alt={user.name} className="w-16 h-16 rounded-2xl object-cover shadow-inner" />
                <div>
                  <h3 className="font-bold text-xl text-slate-800">{user.name}</h3>
                  <span className={`inline-block px-3 py-1 mt-1 rounded-full text-xs font-black uppercase tracking-wider
                    ${user.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                    ${user.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                    ${user.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : ''}
                  `}>
                    {user.category}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow">
                "{user.description}"
              </p>

              {/* Footer / CTA */}
              <div className="pt-6 border-t border-slate-100 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-500 font-bold text-sm">
                  <Clock size={16} strokeWidth={2.5} />
                  <span>{user.timeRequired}</span>
                </div>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 text-white
                  ${user.color === 'blue' ? 'bg-blue-600 shadow-lg shadow-blue-600/30' : ''}
                  ${user.color === 'purple' ? 'bg-purple-600 shadow-lg shadow-purple-600/30' : ''}
                  ${user.color === 'emerald' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/30' : ''}
                `}>
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
