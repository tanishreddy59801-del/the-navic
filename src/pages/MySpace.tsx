import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, PlayCircle, Video, UserCircle, Coins, Plus, Trash2, Edit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AddSkillModal } from '@/components/ui/add-skill-modal';
import { useAppContext } from '@/contexts/AppContext';

const upcomingLessons = [
  {
    id: 1,
    title: "Intro to React Hooks",
    partner: "Alex Johnson",
    date: "Today, 4:00 PM",
    duration: "45 mins",
    type: "Learning",
    color: "blue"
  },
  {
    id: 2,
    title: "Conversational Spanish",
    partner: "Sarah Chen",
    date: "Tomorrow, 10:00 AM",
    duration: "60 mins",
    type: "Teaching",
    color: "purple"
  }
];

const historyLessons = [
  {
    id: 3,
    title: "Figma Prototyping",
    partner: "Marcus Cole",
    date: "Sep 8, 2:00 PM",
    duration: "60 mins",
    type: "Learning",
    status: "Completed",
    color: "emerald"
  },
  {
    id: 4,
    title: "Guitar Basics",
    partner: "David Kim",
    date: "Sep 5, 5:30 PM",
    duration: "45 mins",
    type: "Teaching",
    status: "Completed",
    color: "emerald"
  }
];

export function MySpace() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'skills' | 'history'>('upcoming');
  const [isAddSkillModalOpen, setIsAddSkillModalOpen] = useState(false);
  const { user, mySkills, deleteSkill } = useAppContext();

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-32 px-6 transition-colors duration-300">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-400/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[100px]" />
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-400/10 mix-blend-multiply dark:mix-blend-lighten filter blur-[80px]" />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Profile Header Card */}
        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200/40 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent dark:from-blue-900/20 rounded-bl-full pointer-events-none" />
          
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-xl shadow-blue-500/30">
              <img 
                src={user.avatarUrl} 
                alt="Profile" 
                className="w-full h-full rounded-full border-4 border-white dark:border-slate-800 object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-emerald-500 w-8 h-8 rounded-full border-4 border-white dark:border-slate-800 shadow-sm flex items-center justify-center">
              <CheckCircle2 size={14} className="text-white" strokeWidth={4} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>Welcome back, {user.name}!</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6">Web Developer & aspiring Spanish speaker.</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl px-6 py-4 border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <PlayCircle size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 dark:text-white leading-none mb-1">{user.hoursLearned}</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hours Learned</div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl px-6 py-4 border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <UserCircle size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 dark:text-white leading-none mb-1">{user.hoursTaught}</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hours Taught</div>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl px-6 py-4 border border-slate-100 dark:border-slate-700 flex items-center gap-4 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Coins size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 dark:text-white leading-none mb-1">{user.credits}</div>
                  <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Credits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-px transition-colors duration-300">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'upcoming' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            My Schedule
            {activeTab === 'upcoming' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 dark:bg-white rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'skills' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            My Skills
            {activeTab === 'skills' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 dark:bg-white rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'history' ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
          >
            History & Courses
            {activeTab === 'history' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 dark:bg-white rounded-t-full" />
            )}
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === 'upcoming' && (
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                {upcomingLessons.map(lesson => (
                  <div key={lesson.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/20 dark:shadow-none flex flex-col md:flex-row items-center gap-6 group hover:border-slate-200 dark:hover:border-slate-600 transition-colors">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner
                      ${lesson.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'}
                    `}>
                      <Calendar size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${lesson.type === 'Learning' ? 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300' : 'bg-slate-800 dark:bg-slate-900 text-white'}`}>
                          {lesson.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{lesson.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5"><UserCircle size={16} /> {lesson.partner}</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {lesson.date}</span>
                        <span className="flex items-center gap-1.5"><PlayCircle size={16} /> {lesson.duration}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        import('sonner').then(({ toast }) => toast.info("Coming Soon", { description: "Video calling will be available in the next update!" }));
                      }}
                      className="w-full md:w-auto px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-xl shadow-slate-900/20 dark:shadow-none"
                    >
                      <Video size={18} strokeWidth={2.5} />
                      Join Call
                    </button>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Add New Skill Card */}
                <button 
                  onClick={() => setIsAddSkillModalOpen(true)}
                  className="bg-transparent rounded-[2rem] border-4 border-dashed border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors duration-300 flex flex-col items-center justify-center p-8 min-h-[200px] group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-4">
                    <Plus size={32} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-lg text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Add a Skill</span>
                </button>

                {/* Existing Skills */}
                {mySkills.map(skill => (
                  <div key={skill.id} className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[2.5rem] p-6 border border-white dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/60 dark:hover:shadow-blue-500/10 transition-all duration-500 flex flex-col h-full overflow-hidden relative">
                    
                    {/* Subtle top gradient glow on card based on color */}
                    <div className={`absolute top-0 left-0 w-full h-32 opacity-20 dark:opacity-10 pointer-events-none bg-gradient-to-b to-transparent
                      ${skill.color === 'blue' ? 'from-blue-500' : ''}
                      ${skill.color === 'purple' ? 'from-purple-500' : ''}
                      ${skill.color === 'emerald' ? 'from-emerald-500' : ''}
                      ${skill.color === 'amber' ? 'from-amber-500' : ''}
                      ${skill.color === 'rose' ? 'from-rose-500' : ''}
                    `} />

                    <div className="flex-1 relative z-10">
                      <span className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 transition-colors
                        ${skill.color === 'blue' ? 'bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : ''}
                        ${skill.color === 'purple' ? 'bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' : ''}
                        ${skill.color === 'emerald' ? 'bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' : ''}
                        ${skill.color === 'amber' ? 'bg-amber-100/80 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300' : ''}
                        ${skill.color === 'rose' ? 'bg-rose-100/80 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300' : ''}
                      `}>
                        {skill.category}
                      </span>
                      <h3 className="font-bold text-2xl text-slate-800 dark:text-white mb-2 leading-tight">{skill.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700/50 relative z-10">
                      <button 
                        onClick={() => {
                          import('sonner').then(({ toast }) => toast.info("Coming Soon", { description: "Skill editing will be available soon." }));
                        }}
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                      >
                        <Edit2 size={18} strokeWidth={2.5} />
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteSkill(skill.id)}
                        className="w-14 h-12 flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-500 dark:text-red-400 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 size={20} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4"
              >
                {historyLessons.map(lesson => (
                  <div key={lesson.id} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 border-slate-100 dark:border-slate-700 shadow-sm dark:shadow-none flex flex-col md:flex-row items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner bg-emerald-50 dark:bg-emerald-900/30 text-emerald-500 dark:text-emerald-400">
                      <CheckCircle2 size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300">
                          {lesson.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-700 dark:text-white">{lesson.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold text-slate-400 dark:text-slate-500">
                        <span className="flex items-center gap-1.5"><UserCircle size={16} /> {lesson.partner}</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {lesson.date}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        import('sonner').then(({ toast }) => toast.info("Coming Soon", { description: "Detailed history view is under construction." }));
                      }}
                      className="w-full md:w-auto px-5 py-2.5 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Add Skill Modal */}
      <AddSkillModal 
        isOpen={isAddSkillModalOpen} 
        onClose={() => setIsAddSkillModalOpen(false)} 
      />
    </div>
  );
}
