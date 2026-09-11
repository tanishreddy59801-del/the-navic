import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from 'sonner';

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
  instructorAvatarUrl?: string;
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

export type Message = {
  id: string;
  senderId: 'me' | string;
  text: string;
  timestamp: string;
};

export type Conversation = {
  id: string;
  partnerName: string;
  partnerAvatarUrl: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
  isOnline?: boolean;
};

type AppContextType = {
  user: User;
  mySkills: Skill[];
  discoverSkills: Skill[];
  conversations: Conversation[];
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  updateUser: (updates: Partial<User>) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  updateCredits: (amount: number) => void;
  buySkill: (skill: Skill) => void;
  sendMessage: (conversationId: string, text: string) => void;
};

const defaultUser: User = {
  name: 'Tanish',
  avatarUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=300&auto=format&fit=crop',
  credits: 450,
  hoursLearned: 12,
  hoursTaught: 8,
  status: 'online',
};

const defaultConversations: Conversation[] = [
  {
    id: 'c1',
    partnerName: 'Sarah J.',
    partnerAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    lastMessage: 'Let me know if you need help with the Framer Motion layout animations.',
    lastMessageTime: '10:42 AM',
    unreadCount: 2,
    isOnline: true,
    messages: [
      { id: 'm1', senderId: 'c1', text: 'Hi Tanish! Thanks for enrolling in my course.', timestamp: '10:40 AM' },
      { id: 'm2', senderId: 'me', text: 'Hey Sarah! Super excited to learn.', timestamp: '10:41 AM' },
      { id: 'm3', senderId: 'c1', text: 'Awesome. We will start with spring physics.', timestamp: '10:41 AM' },
      { id: 'm4', senderId: 'c1', text: 'Let me know if you need help with the Framer Motion layout animations.', timestamp: '10:42 AM' }
    ]
  },
  {
    id: 'c2',
    partnerName: 'Chef Pierre',
    partnerAvatarUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop',
    lastMessage: 'Did you remember to feed your starter today?',
    lastMessageTime: 'Yesterday',
    unreadCount: 0,
    isOnline: false,
    messages: [
      { id: 'm1', senderId: 'c2', text: 'Bonjour! Welcome to the sourdough class.', timestamp: 'Yesterday' },
      { id: 'm2', senderId: 'me', text: 'Thanks Chef! Im ready.', timestamp: 'Yesterday' },
      { id: 'm3', senderId: 'c2', text: 'Did you remember to feed your starter today?', timestamp: 'Yesterday' }
    ]
  },
  {
    id: 'c3',
    partnerName: 'Alex T.',
    partnerAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    lastMessage: 'Drink plenty of water before our HIIT session.',
    lastMessageTime: 'Tuesday',
    unreadCount: 0,
    isOnline: true,
    messages: [
      { id: 'm1', senderId: 'c3', text: 'Drink plenty of water before our HIIT session.', timestamp: 'Tuesday' }
    ]
  }
];

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
  { id: '101', title: 'Advanced Framer Motion Animations', category: 'Web Dev', description: 'Learn complex spring physics and layout animations.', duration: 60, classes: 4, price: 150, color: 'purple', instructor: 'Sarah J.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', rating: '4.9', reviews: 124 },
  { id: '102', title: 'Figma to Code: Perfect Handoff', category: 'Design', description: 'Bridging the gap between design and engineering.', duration: 45, classes: 2, price: 80, color: 'blue', instructor: 'Mike D.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop', rating: '4.8', reviews: 89 },
  { id: '103', title: 'Ableton Live: Beatmaking Basics', category: 'Music', description: 'Start producing your own tracks from scratch.', duration: 60, classes: 5, price: 200, color: 'amber', instructor: 'DJ Kool', instructorAvatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop', rating: '4.9', reviews: 256 },
  { id: '104', title: 'Conversational Spanish in 30 Days', category: 'Languages', description: 'Master the basics of Spanish conversation quickly.', duration: 30, classes: 10, price: 300, color: 'rose', instructor: 'Maria G.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop', rating: '4.7', reviews: 42 },
  { id: '105', title: 'Mastering Sourdough Bread', category: 'Culinary', description: 'Bake bakery-quality sourdough at home with simple tools.', duration: 45, classes: 3, price: 120, color: 'amber', instructor: 'Chef Pierre', instructorAvatarUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=150&auto=format&fit=crop', rating: '4.9', reviews: 531 },
  { id: '106', title: 'HIIT for Busy Professionals', category: 'Fitness', description: '20-minute high-intensity workouts you can do anywhere.', duration: 20, classes: 14, price: 250, color: 'emerald', instructor: 'Alex T.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', rating: '4.8', reviews: 890 },
  { id: '107', title: 'Intro to Python Data Science', category: 'Web Dev', description: 'Learn pandas, numpy, and matplotlib from scratch.', duration: 60, classes: 6, price: 180, color: 'blue', instructor: 'Dr. Alan M.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', rating: '4.6', reviews: 210 },
  { id: '108', title: 'UI/UX Mobile App Design', category: 'Design', description: 'Design engaging mobile experiences using human interface guidelines.', duration: 50, classes: 4, price: 220, color: 'purple', instructor: 'Elena R.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&auto=format&fit=crop', rating: '4.9', reviews: 340 },
  { id: '109', title: 'Jazz Piano Improvisation', category: 'Music', description: 'Unlock the secrets of jazz harmony and soloing.', duration: 45, classes: 8, price: 400, color: 'rose', instructor: 'Theo W.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', rating: '5.0', reviews: 112 },
  { id: '110', title: 'Business Mandarin Basics', category: 'Languages', description: 'Essential vocabulary and etiquette for doing business in China.', duration: 40, classes: 5, price: 180, color: 'emerald', instructor: 'Wei C.', instructorAvatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop', rating: '4.7', reviews: 76 }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);
  const [mySkills, setMySkills] = useState<Skill[]>(defaultSkills);
  const [discoverSkills, setDiscoverSkills] = useState<Skill[]>(defaultDiscoverSkills);
  const [conversations, setConversations] = useState<Conversation[]>(defaultConversations);
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
      toast.success(`Successfully enrolled in ${skill.title}!`, {
        description: `-${skill.price} credits deducted from your balance.`,
      });
    } else {
      toast.error("Not enough credits!", {
        description: `You need ${skill.price - user.credits} more credits to enroll.`,
      });
    }
  };

  const sendMessage = (conversationId: string, text: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substring(2, 9),
      senderId: 'me',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        return {
          ...conv,
          lastMessage: text,
          lastMessageTime: newMessage.timestamp,
          messages: [...conv.messages, newMessage]
        };
      }
      return conv;
    }));

    // Mock reply after delay
    setTimeout(() => {
      const replyMessage: Message = {
        id: Math.random().toString(36).substring(2, 9),
        senderId: conversationId,
        text: 'That sounds great! Let me know if you need anything else.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setConversations(prev => prev.map(conv => {
        if (conv.id === conversationId) {
          return {
            ...conv,
            lastMessage: replyMessage.text,
            lastMessageTime: replyMessage.timestamp,
            unreadCount: conv.unreadCount + 1,
            messages: [...conv.messages, replyMessage]
          };
        }
        return conv;
      }));
    }, 2000);
  };

  return (
    <AppContext.Provider value={{ 
      user, mySkills, discoverSkills, conversations, theme, setTheme, updateUser, 
      addSkill, updateSkill, deleteSkill, updateCredits, buySkill, sendMessage 
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
