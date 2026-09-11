import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, User as UserIcon, Github } from 'lucide-react';
import { Logo } from '../Logo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth delay
    setTimeout(() => {
      onLogin();
      onClose();
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl pointer-events-auto overflow-hidden relative border border-slate-200 dark:border-slate-800"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[80px]" />
                <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] rounded-full bg-purple-500/20 dark:bg-purple-600/10 blur-[80px]" />
              </div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="flex justify-center mb-8">
                  <Logo />
                </div>

                <div className="text-center mb-8">
                  <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
                    {isLogin ? 'Welcome back' : 'Join Navic'}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    {isLogin ? 'Enter your details to access your account.' : 'Create an account to start swapping skills.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {!isLogin && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <UserIcon className="text-slate-400" size={20} />
                      </div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-800 dark:text-white font-medium focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Mail className="text-slate-400" size={20} />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-800 dark:text-white font-medium focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Lock className="text-slate-400" size={20} />
                    </div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl pl-12 pr-4 py-4 text-slate-800 dark:text-white font-medium focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400"
                    />
                  </div>

                  {isLogin && (
                    <div className="flex justify-end">
                      <button type="button" className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        Forgot password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full mt-2 bg-blue-600 text-white rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 active:scale-[0.98]"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </button>

                  <div className="relative flex items-center py-4">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                    <span className="flex-shrink-0 mx-4 text-slate-400 text-sm font-bold uppercase tracking-wider">or</span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white rounded-2xl py-4 font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700 transition-all active:scale-[0.98]"
                  >
                    <Github size={24} />
                    Continue with GitHub
                  </button>
                </form>

                <p className="text-center mt-8 text-slate-500 dark:text-slate-400 font-medium">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {isLogin ? 'Sign Up' : 'Sign In'}
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
