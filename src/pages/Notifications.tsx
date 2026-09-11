import React, { useState } from 'react';
import { Bell, UserPlus, BookOpen, MessageCircle, Heart, CheckCircle2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialNotifications = [
  {
    id: 1,
    type: 'message',
    title: 'New message from Sarah J.',
    description: 'Let me know if you need help with the Framer Motion layout...',
    time: '2 hours ago',
    read: false,
    icon: <MessageCircle className="text-blue-500" size={20} />
  },
  {
    id: 2,
    type: 'enrollment',
    title: 'Enrollment Confirmed',
    description: 'You have successfully enrolled in "Mastering Sourdough Bread".',
    time: '5 hours ago',
    read: false,
    icon: <BookOpen className="text-emerald-500" size={20} />
  },
  {
    id: 3,
    type: 'match',
    title: 'New Skill Match!',
    description: 'Alex T. wants to learn React in exchange for HIIT training.',
    time: 'Yesterday',
    read: true,
    icon: <UserPlus className="text-purple-500" size={20} />
  },
  {
    id: 4,
    type: 'system',
    title: 'Welcome to Navic',
    description: 'Set up your profile to start discovering and swapping skills.',
    time: '2 days ago',
    read: true,
    icon: <Heart className="text-rose-500" size={20} />
  }
];

export function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b-2 border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <h1 className="text-4xl font-black text-slate-800 dark:text-white flex items-center gap-4 tracking-tight transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
              Notifications
              {unreadCount > 0 && (
                <span className="bg-blue-600 text-white text-lg font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-600/30">
                  {unreadCount}
                </span>
              )}
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={markAllAsRead}
              className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors flex items-center gap-2"
            >
              <CheckCircle2 size={16} />
              Mark all read
            </button>
            <button 
              onClick={clearAll}
              className="px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors flex items-center gap-2"
            >
              <Trash2 size={16} />
              Clear
            </button>
          </div>
        </div>

        {/* List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {notifications.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2rem] p-12 text-center flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300 dark:text-slate-600 mb-6">
                  <Bell size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">All caught up!</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">You have no new notifications right now.</p>
              </motion.div>
            ) : (
              notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className={`bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 transition-all duration-300 flex items-start gap-5
                    ${notification.read ? 'border-slate-100 dark:border-slate-800/50 opacity-70' : 'border-blue-100 dark:border-blue-900/40 shadow-xl shadow-blue-500/5 dark:shadow-none'}
                  `}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0
                    ${notification.read ? 'bg-slate-100 dark:bg-slate-900' : 'bg-blue-50 dark:bg-blue-900/30'}
                  `}>
                    {notification.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <h3 className={`font-bold truncate ${notification.read ? 'text-slate-600 dark:text-slate-300' : 'text-slate-900 dark:text-white'}`}>
                        {notification.title}
                      </h3>
                      <span className="text-xs font-bold text-slate-400 shrink-0">{notification.time}</span>
                    </div>
                    <p className={`text-sm ${notification.read ? 'text-slate-500 dark:text-slate-400' : 'text-slate-600 dark:text-slate-300'} font-medium line-clamp-2`}>
                      {notification.description}
                    </p>
                  </div>

                  {!notification.read && (
                    <div className="w-3 h-3 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm" />
                  )}
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
