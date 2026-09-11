import React, { useState } from 'react';
import { User, Bell, Shield, Moon, MonitorSmartphone, CheckCircle2, Sun } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type SettingsTab = 'account' | 'appearance' | 'notifications' | 'privacy';

export function Settings() {
  const { user, updateUser, theme, setTheme } = useAppContext();
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');
  
  const [formData, setFormData] = useState({
    name: user.name,
    avatarUrl: user.avatarUrl,
  });

  const handleSave = () => {
    updateUser(formData);
    import('sonner').then(({ toast }) => toast.success("Settings saved!", { description: "Your profile has been updated." }));
  };

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'appearance', label: 'Appearance', icon: MonitorSmartphone },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
  ] as const;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-8 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="col-span-1 md:col-span-1 flex flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all duration-300 border-2",
                    isActive 
                      ? "bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-sm border-slate-100 dark:border-slate-700" 
                      : "text-slate-500 dark:text-slate-400 border-transparent hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm"
                  )}
                >
                  <Icon size={18} className={isActive ? "text-blue-500" : ""} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="col-span-1 md:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-8"
              >
                
                {activeTab === 'account' && (
                  <>
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
                                  ? "bg-slate-800 text-white border-slate-800 dark:bg-blue-600 dark:border-blue-600 shadow-md" 
                                  : "bg-transparent text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                              )}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </div>
                    </section>

                    <div className="flex justify-end">
                      <button 
                        onClick={handleSave}
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 active:scale-95"
                      >
                        Save Changes <CheckCircle2 size={20} strokeWidth={2.5} />
                      </button>
                    </div>
                  </>
                )}

                {activeTab === 'appearance' && (
                  <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Appearance Settings</h2>
                    
                    <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-slate-100 dark:border-slate-700 cursor-pointer" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
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
                        className={cn(
                          "w-14 h-8 rounded-full relative transition-colors duration-300",
                          theme === 'dark' ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-600"
                        )}
                      >
                        <motion.div 
                          animate={{ x: theme === 'dark' ? 26 : 4 }}
                          className="w-6 h-6 bg-white rounded-full absolute top-1 shadow-sm"
                        />
                      </button>
                    </div>
                  </section>
                )}

                {activeTab === 'notifications' && (
                  <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 mb-6">
                      <Bell size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Notification Preferences</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
                      Detailed notification preferences are coming soon. For now, you will receive all essential alerts.
                    </p>
                  </section>
                )}

                {activeTab === 'privacy' && (
                  <section className="bg-white dark:bg-slate-800 rounded-[2rem] p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/40 dark:shadow-none transition-colors duration-300 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-400 mb-6">
                      <Shield size={40} />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Privacy & Security</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-center max-w-sm">
                      Your data is secure. Advanced privacy controls are currently under development.
                    </p>
                  </section>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
