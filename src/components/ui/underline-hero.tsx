"use client";

import React, { useEffect, useState } from "react";

const words = ["learn", "grow", "teach", "share", "connect"];

export function UnderlineHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section className="relative flex items-center justify-center min-h-screen w-full z-10" aria-labelledby="hero-heading">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center px-4">
        <h1 id="hero-heading" className="text-6xl sm:text-7xl md:text-[7.5rem] font-black tracking-tight leading-[1.1] mb-8 text-black dark:text-white transition-colors duration-300" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
          A place to
          <br />
          <span className="relative inline-block mt-4 min-w-[320px] md:min-w-[420px]">
            <span className="font-normal text-7xl sm:text-8xl md:text-[9rem] text-blue-600 dark:text-blue-400 font-serif italic pr-2">
              {currentText}
            </span>
            <svg 
              className="absolute left-0 w-full top-full -mt-1 md:-mt-2 pointer-events-none text-purple-500" 
              viewBox="0 0 170 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none" 
              aria-hidden="true"
            >
              <path 
                d="M2 9C32.8203 5.34032 108.769 -0.881146 166 3.51047" 
                stroke="currentColor" 
                strokeWidth="6" 
                strokeLinecap="round" 
                fill="none" 
                opacity="0.9" 
              />
            </svg>
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12 mt-6">
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium transition-colors duration-300">
            Join a community of curious minds. Discover new passions, share your expertise, and build meaningful connections worldwide.
          </p>
        </div>

        <div>
          <button className="px-10 py-5 rounded-2xl bg-black dark:bg-white text-white dark:text-black font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
