import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Skill = {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: number;
  classes: number;
  color: 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'slate';
};

export type User = {
  name: string;
  avatarUrl: string;
  credits: number;
  hoursLearned: number;
  hoursTaught: number;
};

type AppContextType = {
  user: User;
  mySkills: Skill[];
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  updateCredits: (amount: number) => void;
};

const defaultUser: User = {
  name: 'Tanish',
  avatarUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300&auto=format&fit=crop',
  credits: 450,
  hoursLearned: 12,
  hoursTaught: 8,
};

const defaultSkills: Skill[] = [
  {
    id: '1',
    title: "React & Next.js Advanced",
    category: "Web Dev",
    description: "Learn advanced React patterns and Next.js app routing.",
    duration: 45,
    classes: 5,
    color: "blue"
  },
  {
    id: '2',
    title: "Intro to Tailwind CSS",
    category: "Design",
    description: "Master utility-first CSS to build fast and beautiful interfaces.",
    duration: 30,
    classes: 3,
    color: "emerald"
  }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);
  const [mySkills, setMySkills] = useState<Skill[]>(defaultSkills);

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill: Skill = {
      ...skill,
      id: Math.random().toString(36).substring(2, 9),
    };
    setMySkills((prev) => [...prev, newSkill]);
  };

  const updateSkill = (id: string, updatedFields: Partial<Skill>) => {
    setMySkills((prev) => 
      prev.map(skill => skill.id === id ? { ...skill, ...updatedFields } : skill)
    );
  };

  const deleteSkill = (id: string) => {
    setMySkills((prev) => prev.filter(skill => skill.id !== id));
  };

  const updateCredits = (amount: number) => {
    setUser(prev => ({ ...prev, credits: prev.credits + amount }));
  };

  return (
    <AppContext.Provider value={{ user, mySkills, addSkill, updateSkill, deleteSkill, updateCredits }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
