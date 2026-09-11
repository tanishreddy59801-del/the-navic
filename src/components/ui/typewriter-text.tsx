"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBeforeDelete?: number;
}

export function TypewriterText({
  words,
  className,
  typingSpeed = 120,
  deletingSpeed = 80,
  delayBeforeDelete = 2000,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (currentText.length < word.length) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(word.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return (
    <span className={cn("inline-block relative", className)}>
      {currentText}
    </span>
  );
}
