import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { Logo } from '../Logo';
import { useAppContext } from '@/contexts/AppContext';

export function Footer() {
  const { setActiveTab } = useAppContext();

  return (
    <footer className="w-full bg-slate-900 dark:bg-slate-950 pt-20 pb-10 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-6 bg-white rounded-2xl p-2 inline-block">
              <Logo />
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 max-w-sm">
              The world's premier platform for skill swapping. Learn anything, teach what you know, and build a community of lifelong learners.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all shadow-lg hover:-translate-y-1">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Platform</h3>
            <ul className="space-y-4">
              <li><button onClick={() => setActiveTab(1)} className="text-slate-400 hover:text-white transition-colors font-medium">Discover Skills</button></li>
              <li><button onClick={() => setActiveTab(2)} className="text-slate-400 hover:text-white transition-colors font-medium">My Schedule</button></li>
              <li><button onClick={() => setActiveTab(4)} className="text-slate-400 hover:text-white transition-colors font-medium">Community Chat</button></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Leaderboard</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Press</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Stay Updated</h3>
            <p className="text-slate-400 font-medium mb-4">
              Get the latest news and updates from the Navic community directly to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => {
              e.preventDefault();
              import('sonner').then(({ toast }) => toast.success("Subscribed!", { description: "You've successfully joined our newsletter." }));
            }}>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Mail className="text-slate-500" size={18} />
                </div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  className="w-full bg-slate-800 border-2 border-slate-700 rounded-xl pl-12 pr-4 py-3.5 text-white font-medium focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl py-3.5 flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-600/20">
                Subscribe <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 font-medium text-sm">
            © {new Date().getFullYear()} Navic Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
