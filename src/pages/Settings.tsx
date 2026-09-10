import React, { useState } from 'react';
import { User, Bell, Shield, Moon, MonitorSmartphone, CheckCircle2, ChevronRight, LogOut, Sun } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Settings() {
  const { user, updateUser, theme, setTheme } = useAppContext();
  
  const [formData, setFormData] = useState({
    name: user.name,
    avatarUrl: user.avatarUrl,
  });

  const handleSave = () => {
    updateUser(formData);
    alert('Settings saved successfully!');
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-8 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="col-span-1 flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl font-bold shadow-sm border-2 border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <User size={18} className="text-blue-500" />
              Account
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 font-bold hover:bg-white dark:hover:bg-slate-800 rounded-2xl hover:shadow-sm border-2 border-transparent transition-all duration-300">
              <MonitorSmartphone size={18} />
              Appearance
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 font-bold hover:bg-white dark:hover:bg-slate-800 rounded-2xl hover:shadow-sm border-2 border-transparent transition-all duration-300">
              <Bell size={18} />
              Notifications
            </button>
            <button className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 font-bold hover:bg-white dark:hover:bg-slate-800 rounded-2xl hover:shadow-sm border-2 border-transparent transition-all duration-300">
              <Shield size={18} />
              Privacy
            </button>
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-2 flex flex-col gap-8">
            
            {/* Profile Section */}
            <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Profile Settings</h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="shrink-0 flex flex-col items-center gap-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-700 shadow-lg">
                    <img src={formData.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors">Change Image</button>
                </div>
                
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Display Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white font-medium focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Avatar Image URL</label>
                    <input 
                      type="text" 
                      value={formData.avatarUrl}
                      onChange={(e) => setFormData({...formData, avatarUrl: e.target.value})}
                      className="w-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white font-medium focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Active Status</label>
                <div className="flex flex-wrap gap-3">
                  {(['online', 'idle', 'dnd', 'offline'] as const).map(status => (
                    <button 
                      key={status}
                      onClick={() => updateUser({ status })}
                      className={cn(
                        "px-4 py-2 rounded-xl font-bold text-sm border-2 transition-all capitalize",
                        user.status === status 
                          ? "bg-slate-800 text-white border-slate-800 dark:bg-blue-600 dark:border-blue-600" 
                          : "bg-transparent text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      )}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Appearance Section */}
            <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Appearance</h2>
              
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-600 dark:text-slate-300">
                    {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white">Dark Mode</h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Toggle dark mode styling</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className={cn(
                    "w-14 h-8 rounded-full relative transition-colors duration-300",
                    theme === 'dark' ? "bg-blue-600" : "bg-slate-300"
                  )}
                >
                  <motion.div 
                    animate={{ x: theme === 'dark' ? 26 : 4 }}
                    className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                  />
                </button>
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end mt-4">
              <button 
                onClick={handleSave}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30"
              >
                Save Changes <CheckCircle2 size={20} strokeWidth={2.5} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
