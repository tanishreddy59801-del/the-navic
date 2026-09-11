import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, X } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AnimatedSearchBarProps {
  className?: string;
  value: string;
  onChange: (val: string) => void;
}

export function AnimatedSearchBar({ className, value, onChange }: AnimatedSearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center w-full max-w-2xl h-24", className)} ref={containerRef}>
      
      {/* SVG filter for the gooey effect */}
      <svg className="hidden">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="gooey" />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div style={{ filter: 'url(#gooey)' }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div
           animate={{
            width: "100%",
            height: isFocused ? "72px" : "64px",
            borderRadius: isFocused ? "36px" : "32px",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white/80 absolute"
        />
        <AnimatePresence>
          {value.length > 0 && (
            <motion.div
              initial={{ x: -20, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -20, opacity: 0, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute right-3 bg-blue-600 w-12 h-12 rounded-full"
            />
          )}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{
          width: "100%",
          height: isFocused ? "72px" : "64px",
          borderRadius: isFocused ? "36px" : "32px",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={cn(
          "relative flex items-center bg-white shadow-xl shadow-slate-200/50 border-2 transition-colors duration-300 z-10 w-full",
          isFocused ? "border-blue-500/30 ring-4 ring-blue-500/10" : "border-slate-100 hover:border-slate-200"
        )}
      >
        <div className="absolute left-0 w-16 h-full flex items-center justify-center text-slate-400 z-20 pointer-events-none">
          <Search size={24} strokeWidth={2.5} className={cn("transition-colors", isFocused && "text-blue-600")} />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="What do you want to learn today?"
          className="w-full h-full bg-transparent outline-none text-lg font-bold text-slate-800 placeholder:text-slate-400 pl-16 pr-16"
        />

        <AnimatePresence>
          {value.length > 0 && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:scale-105 transition-all z-20"
            >
              <ArrowRight size={20} strokeWidth={3} />
            </motion.button>
          )}
          
          {value.length > 0 && (
            <button
              onClick={() => {
                onChange('');
                inputRef.current?.focus();
              }}
              className="absolute right-16 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all z-20"
            >
              <X size={16} strokeWidth={3} />
            </button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
