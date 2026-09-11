"use client";

import { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Sparkles,
  BookOpen,
  Bell,
  CircleHelp,
  MessageCircle,
  type LucideIcon,
  LogOut,
  Settings,
  UserCircle,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useAppContext } from "@/contexts/AppContext";

export type NavItem = {
  label: string;
  icon: LucideIcon;
  id?: string;
  onClick?: () => void;
};

const navItems: NavItem[] = [
  { label: "Home", icon: Home, id: "home" },
  { label: "Discover", icon: Sparkles, id: "discover" },
  { label: "My space", icon: BookOpen, id: "dashboard" },
  { label: "Notifications", icon: Bell, id: "notifications" },
  { label: "Chat", icon: MessageCircle, id: "chat" },
];

function ProfileDropdown({ onSettingsClick }: { onSettingsClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user, setActiveTab } = useAppContext();
  
  // To avoid circular dependency with toast if needed, but we can just alert for now or import toast
  // We'll import toast at the top

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-2 p-1.5 pl-2 pr-3 rounded-full transition-colors duration-200 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm border-[2px] border-white/40 dark:border-slate-700 overflow-hidden">
          <img src={user.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start mr-1">
          <span className="text-sm font-extrabold text-slate-800 dark:text-white leading-tight">{user.name}</span>
        </div>
        <ChevronDown size={14} className={cn("text-slate-400 transition-transform duration-200", isOpen && "rotate-180")} strokeWidth={3} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="absolute right-0 top-full mt-4 w-56 bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl border border-slate-200/50 dark:border-slate-800 rounded-2xl shadow-xl p-2 flex flex-col gap-1 origin-top-right z-50"
          >
            <div className="px-3 py-2 border-b border-slate-100/60 dark:border-slate-800 mb-1">
              <p className="text-sm font-bold text-slate-800 dark:text-white flex items-center gap-2">
                {user.name} 
                <span className={cn(
                  "w-2 h-2 rounded-full",
                  user.status === 'online' ? "bg-emerald-500" :
                  user.status === 'idle' ? "bg-amber-500" :
                  user.status === 'dnd' ? "bg-rose-500" : "bg-slate-500"
                )} />
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Credits: {user.credits}</p>
            </div>
            
            <button 
              onClick={() => { setIsOpen(false); setActiveTab(2); }}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full text-left"
            >
              <UserCircle size={18} strokeWidth={2.5} />
              My Profile
            </button>
            <button 
              onClick={() => { setIsOpen(false); onSettingsClick(); }}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full text-left"
            >
              <Settings size={18} strokeWidth={2.5} />
              Settings
            </button>
            
            <div className="h-[1px] w-full bg-slate-100/60 dark:bg-slate-800 my-1" />
            
            <button 
              onClick={() => { 
                setIsOpen(false); 
                import('sonner').then(({ toast }) => toast("Logged out successfully", { description: "You have been logged out." })); 
              }}
              className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 dark:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors w-full text-left"
            >
              <LogOut size={18} strokeWidth={2.5} />
              Log out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type BottomNavBarProps = {
  className?: string;
  defaultIndex?: number;
  stickyBottom?: boolean;
  activeIndex?: number;
  onTabChange?: (index: number) => void;
};

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
  activeIndex: externalActiveIndex,
  onTabChange,
}: BottomNavBarProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState(defaultIndex);
  
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;
  
  const handleTabClick = (idx: number) => {
    if (onTabChange) {
      onTabChange(idx);
    } else {
      setInternalActiveIndex(idx);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
      role="navigation"
      aria-label="Bottom Navigation"
      className={cn(
        "bg-white/80 backdrop-blur-2xl border border-slate-200/50 rounded-full flex items-center p-2 shadow-2xl w-fit max-w-[95vw] h-[72px]",
        stickyBottom && "fixed inset-x-0 bottom-8 mx-auto z-20 w-fit",
        className,
      )}
    >
      <div className="flex items-center space-x-1 overflow-x-auto [&::-webkit-scrollbar]:hidden w-fit max-w-[calc(95vw-90px)]">
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center gap-0 px-5 py-3 rounded-full transition-colors duration-200 relative h-12 min-w-[56px] min-h-[48px] shrink-0",
              isActive
                ? "bg-primary/10 text-primary shadow-sm"
                : "bg-transparent text-slate-500 hover:bg-slate-100",
              "focus:outline-none focus-visible:ring-0 cursor-pointer",
            )}
            onClick={() => handleTabClick(idx)}
            aria-label={item.label}
            type="button"
          >
            <Icon
              size={26}
              strokeWidth={2.5}
              aria-hidden
              className="transition-colors duration-200"
            />

            <motion.div
              initial={false}
              animate={{
                width: isActive ? "auto" : 0,
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? 8 : 0,
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.2 },
                marginLeft: { duration: 0.2 },
              }}
              className={cn("overflow-hidden flex items-center")}
            >
              <span
                className={cn(
                  "font-extrabold text-base tracking-tight whitespace-nowrap select-none transition-opacity duration-200 leading-tight block pr-1",
                  isActive ? "text-primary" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </motion.div>
          </motion.button>
        );
      })}
      </div>

      {/* Vertical Divider */}
      <div className="w-[2px] h-8 bg-slate-200 mx-2 rounded-full shrink-0" />

      {/* Custom Profile Dropdown */}
      <div className="shrink-0">
        <ProfileDropdown onSettingsClick={() => handleTabClick(5)} />
      </div>
    </motion.nav>
  );
}

export default BottomNavBar;
