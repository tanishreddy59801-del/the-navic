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
    <div className="w-full min-h-screen bg-slate-50 relative pt-32 pb-32 px-6">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 border-2 border-slate-100 shadow-2xl shadow-slate-200/40 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-xl shadow-blue-500/30">
              <img 
                src={user.avatarUrl} 
                alt="Profile" 
                className="w-full h-full rounded-full border-4 border-white object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-emerald-500 w-8 h-8 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
              <CheckCircle2 size={14} className="text-white" strokeWidth={4} />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl font-black text-slate-800 mb-2 tracking-tight" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>Welcome back, {user.name}!</h1>
            <p className="text-lg text-slate-500 font-medium mb-6">Web Developer & aspiring Spanish speaker.</p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <div className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <PlayCircle size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 leading-none mb-1">{user.hoursLearned}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Hours Learned</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <UserCircle size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 leading-none mb-1">{user.hoursTaught}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Hours Taught</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl px-6 py-4 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <Coins size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 leading-none mb-1">{user.credits}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Credits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 border-b-2 border-slate-100 pb-px">
          <button 
            onClick={() => setActiveTab('upcoming')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'upcoming' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            My Schedule
            {activeTab === 'upcoming' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'skills' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            My Skills
            {activeTab === 'skills' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 rounded-t-full" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`pb-4 text-xl font-bold transition-all relative ${activeTab === 'history' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
          >
            History & Courses
            {activeTab === 'history' && (
              <motion.div layoutId="activeTab" className="absolute bottom-[-2px] left-0 right-0 h-1 bg-slate-900 rounded-t-full" />
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
                  <div key={lesson.id} className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-lg shadow-slate-200/20 flex flex-col md:flex-row items-center gap-6 group hover:border-slate-200 transition-colors">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner
                      ${lesson.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'}
                    `}>
                      <Calendar size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${lesson.type === 'Learning' ? 'bg-slate-100 text-slate-600' : 'bg-slate-800 text-white'}`}>
                          {lesson.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800">{lesson.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold text-slate-500">
                        <span className="flex items-center gap-1.5"><UserCircle size={16} /> {lesson.partner}</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {lesson.date}</span>
                        <span className="flex items-center gap-1.5"><PlayCircle size={16} /> {lesson.duration}</span>
                      </div>
                    </div>

                    <button className="w-full md:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20">
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
                  className="bg-transparent rounded-[2rem] border-4 border-dashed border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 transition-colors duration-300 flex flex-col items-center justify-center p-8 min-h-[200px] group cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 group-hover:bg-blue-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors mb-4">
                    <Plus size={32} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-lg text-slate-500 group-hover:text-blue-600 transition-colors">Add a Skill</span>
                </button>

                {/* Existing Skills */}
                {mySkills.map(skill => (
                  <div key={skill.id} className="bg-white rounded-[2rem] p-6 border-2 border-slate-100 shadow-xl shadow-slate-200/30 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                    <div className="flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4
                        ${skill.color === 'blue' ? 'bg-blue-100 text-blue-600' : ''}
                        ${skill.color === 'purple' ? 'bg-purple-100 text-purple-600' : ''}
                        ${skill.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : ''}
                      `}>
                        {skill.category}
                      </span>
                      <h3 className="font-bold text-xl text-slate-800 mb-2 leading-tight">{skill.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
                      <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        <Edit2 size={16} strokeWidth={2.5} />
                        Edit
                      </button>
                      <button 
                        onClick={() => deleteSkill(skill.id)}
                        className="w-12 h-11 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                      >
                        <Trash2 size={18} strokeWidth={2.5} />
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
                  <div key={lesson.id} className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm flex flex-col md:flex-row items-center gap-6 opacity-80 hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-inner bg-emerald-50 text-emerald-500">
                      <CheckCircle2 size={28} strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest bg-slate-100 text-slate-500">
                          {lesson.type}
                        </span>
                        <h3 className="text-xl font-bold text-slate-700">{lesson.title}</h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-bold text-slate-400">
                        <span className="flex items-center gap-1.5"><UserCircle size={16} /> {lesson.partner}</span>
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {lesson.date}</span>
                      </div>
                    </div>

                    <button className="w-full md:w-auto px-5 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors">
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
