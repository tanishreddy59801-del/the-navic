import React, { useState, useEffect } from 'react';
import { User as UserIcon, LogOut, Settings, Coins } from 'lucide-react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/contexts/AppContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { user } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 border-b border-slate-100' : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Logo />
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Find a Skill</a>
          <a href="#" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Community</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-200 hover:border-blue-500 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-500/20"
            >
              <img 
                src={user.avatarUrl} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </button>

            {/* Profile Dropdown */}
            <AnimatePresence>
              {isProfileDropdownOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40"
                    onClick={() => setIsProfileDropdownOpen(false)}
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute right-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-50 origin-top-right"
                  >
                    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                          <img 
                            src={user.avatarUrl} 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-slate-800 leading-tight">{user.name}</h3>
                          <p className="text-slate-500 font-medium text-sm flex items-center gap-1 mt-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            Online
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Credits Banner */}
                    <div className="mx-4 mt-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-600 font-bold">
                        <Coins size={18} strokeWidth={2.5} />
                        <span>Credits</span>
                      </div>
                      <span className="text-xl font-black text-emerald-700">{user.credits}</span>
                    </div>

                    <div className="p-4 flex flex-col gap-2">
                      <button className="flex items-center gap-3 px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-colors w-full text-left group">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors">
                          <UserIcon size={18} strokeWidth={2.5} />
                        </div>
                        My Profile
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-2xl transition-colors w-full text-left group">
                        <div className="p-2 bg-purple-50 text-purple-600 rounded-xl group-hover:bg-purple-100 transition-colors">
                          <Settings size={18} strokeWidth={2.5} />
                        </div>
                        Settings
                      </button>
                      <button className="flex items-center gap-3 px-4 py-3 text-red-600 font-bold hover:bg-red-50 rounded-2xl transition-colors w-full text-left group mt-2 border border-transparent hover:border-red-100">
                        <div className="p-2 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-100 transition-colors">
                          <LogOut size={18} strokeWidth={2.5} />
                        </div>
                        Sign Out
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}
