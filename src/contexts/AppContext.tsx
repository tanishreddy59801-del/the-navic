import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Skill = {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: number;
  classes: number;
  price: number;
  color: 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'slate';
  instructor?: string;
  rating?: string;
  reviews?: number;
};

export type UserStatus = 'online' | 'offline' | 'idle' | 'dnd';

export type User = {
  name: string;
  avatarUrl: string;
  credits: number;
  hoursLearned: number;
  hoursTaught: number;
  status: UserStatus;
};

type AppContextType = {
  user: User;
  mySkills: Skill[];
  discoverSkills: Skill[];
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  updateUser: (updates: Partial<User>) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  updateCredits: (amount: number) => void;
  buySkill: (skill: Skill) => void;
};

const defaultUser: User = {
  name: 'Tanish',
  avatarUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300&auto=format&fit=crop',
  credits: 450,
  hoursLearned: 12,
  hoursTaught: 8,
  status: 'online',
};

const defaultSkills: Skill[] = [
  {
    id: '1',
    title: "React & Next.js Advanced",
    category: "Web Dev",
    description: "Learn advanced React patterns and Next.js app routing.",
    duration: 45,
    classes: 5,
    price: 100,
    color: "blue"
  },
  {
    id: '2',
    title: "Intro to Tailwind CSS",
    category: "Design",
    description: "Master utility-first CSS to build fast and beautiful interfaces.",
    duration: 30,
    classes: 3,
    price: 50,
    color: "emerald"
  }
];

const defaultDiscoverSkills: Skill[] = [
  { id: '101', title: 'Advanced Framer Motion Animations', category: 'Web Dev', description: 'Learn complex spring physics and layout animations.', duration: 60, classes: 4, price: 150, color: 'purple', instructor: 'Sarah J.', rating: '4.9', reviews: 124 },
  { id: '102', title: 'Figma to Code: Perfect Handoff', category: 'Design', description: 'Bridging the gap between design and engineering.', duration: 45, classes: 2, price: 80, color: 'blue', instructor: 'Mike D.', rating: '4.8', reviews: 89 },
  { id: '103', title: 'Ableton Live: Beatmaking Basics', category: 'Music', description: 'Start producing your own tracks from scratch.', duration: 60, classes: 5, price: 200, color: 'amber', instructor: 'DJ Kool', rating: '4.9', reviews: 256 },
  { id: '104', title: 'Conversational Spanish in 30 Days', category: 'Languages', description: 'Master the basics of Spanish conversation quickly.', duration: 30, classes: 10, price: 300, color: 'rose', instructor: 'Maria G.', rating: '4.7', reviews: 42 },
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);
  const [mySkills, setMySkills] = useState<Skill[]>(defaultSkills);
  const [discoverSkills, setDiscoverSkills] = useState<Skill[]>(defaultDiscoverSkills);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const updateUser = (updates: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

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

  const buySkill = (skill: Skill) => {
    if (user.credits >= skill.price) {
      updateCredits(-skill.price);
      alert(`Successfully enrolled in ${skill.title}!`);
    } else {
      alert("Not enough credits!");
    }
  };

  return (
    <AppContext.Provider value={{ 
      user, mySkills, discoverSkills, theme, setTheme, updateUser, 
      addSkill, updateSkill, deleteSkill, updateCredits, buySkill 
    }}>
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
