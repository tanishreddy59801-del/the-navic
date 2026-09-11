import React, { useState, useRef, useEffect } from 'react';
import { Send, Paperclip, Search, MoreVertical, Phone, Video, ChevronLeft, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppContext } from '@/contexts/AppContext';

export function Chat() {
  const { conversations, sendMessage, activeChatId, setActiveChatId } = useAppContext();
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChat = conversations.find(c => c.id === activeChatId);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeChat?.messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || !activeChatId) return;
    
    sendMessage(activeChatId, inputText.trim());
    setInputText("");
  };

  return (
    <div className="w-full h-screen bg-slate-50 dark:bg-slate-900 relative pt-32 pb-8 px-6 flex items-center justify-center transition-colors duration-300 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 mix-blend-multiply dark:mix-blend-lighten filter blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-400/20 mix-blend-multiply dark:mix-blend-lighten filter blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full h-[85vh] bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl rounded-[3rem] border border-white dark:border-slate-700 shadow-2xl shadow-slate-200/50 dark:shadow-none flex overflow-hidden relative z-10">
        
        {/* Sidebar: Conversations List */}
        <div className={`w-full md:w-80 lg:w-96 border-r border-slate-100 dark:border-slate-700/50 flex-col shrink-0 h-full ${isMobileChatOpen ? 'hidden md:flex' : 'flex'}`}>
          {/* Header */}
          <div className="p-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-black text-slate-800 dark:text-white" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>Messages</h2>
              <button 
                onClick={() => {
                  import('sonner').then(({ toast }) => toast.info("New Chat", { description: "User search and new conversation creation coming soon." }));
                }}
                className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Plus size={20} strokeWidth={2.5} />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search chats..." 
                className="w-full pl-11 pr-4 py-3 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl font-semibold text-slate-600 dark:text-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
            {conversations.map((conv) => (
              <button 
                key={conv.id}
                onClick={() => { setActiveChatId(conv.id); setIsMobileChatOpen(true); }}
                className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 ${
                  activeChatId === conv.id 
                    ? 'bg-blue-50 dark:bg-blue-500/10 shadow-sm' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <div className="relative shrink-0">
                  <div className={`w-14 h-14 rounded-full p-[2px] bg-gradient-to-br ${activeChatId === conv.id ? 'from-blue-400 to-indigo-500' : 'from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700'}`}>
                    <img src={conv.partnerAvatarUrl} alt={conv.partnerName} className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-800" />
                  </div>
                  {conv.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full" />
                  )}
                </div>
                
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className={`font-bold truncate pr-2 ${activeChatId === conv.id ? 'text-blue-900 dark:text-blue-100' : 'text-slate-800 dark:text-white'}`}>
                      {conv.partnerName}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 shrink-0">{conv.lastMessageTime}</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <p className={`text-sm truncate font-medium ${activeChatId === conv.id ? 'text-blue-700 dark:text-blue-300' : 'text-slate-500 dark:text-slate-400'}`}>
                      {conv.lastMessage}
                    </p>
                    {conv.unreadCount > 0 && (
                      <span className="shrink-0 bg-blue-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">
                        {conv.unreadCount}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Chat Window */}
        {activeChat ? (
          <div className={`flex-1 flex-col h-full bg-slate-50/50 dark:bg-slate-900/20 ${isMobileChatOpen ? 'flex' : 'hidden md:flex'}`}>
            {/* Chat Header */}
            <div className="h-20 px-4 md:px-8 flex items-center justify-between border-b border-slate-100 dark:border-slate-700/50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md">
              <div className="flex items-center gap-3 md:gap-4">
                <button 
                  onClick={() => setIsMobileChatOpen(false)}
                  className="md:hidden p-2 -ml-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                  <img src={activeChat.partnerAvatarUrl} alt={activeChat.partnerName} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-slate-800 dark:text-white leading-tight">{activeChat.partnerName}</h2>
                  <p className="text-sm font-semibold text-emerald-500 dark:text-emerald-400">{activeChat.isOnline ? 'Online' : 'Offline'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <Phone size={20} strokeWidth={2.5} />
                </button>
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <Video size={20} strokeWidth={2.5} />
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1" />
                <button className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                  <MoreVertical size={20} strokeWidth={2.5} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <AnimatePresence initial={false}>
                {activeChat.messages.map((msg) => {
                  const isMe = msg.senderId === 'me';
                  
                  return (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} gap-1`}
                    >
                      <div className={`max-w-[70%] px-6 py-4 rounded-3xl font-medium leading-relaxed shadow-sm ${
                        isMe 
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-br-md' 
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-bl-md'
                      }`}>
                        {msg.text}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 px-2">
                        {msg.timestamp}
                      </span>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border-t border-slate-100 dark:border-slate-700/50">
              <form onSubmit={handleSend} className="flex items-center gap-3 relative">
                <button type="button" className="shrink-0 w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                  <Paperclip size={20} strokeWidth={2.5} />
                </button>
                
                <input 
                  type="text" 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message..." 
                  className="flex-1 h-12 px-6 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl font-semibold text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 shadow-inner"
                />
                
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className="shrink-0 w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 active:scale-95 transition-all disabled:opacity-50 disabled:hover:bg-blue-600 disabled:active:scale-100 shadow-lg shadow-blue-600/30"
                >
                  <Send size={20} strokeWidth={2.5} className="-ml-1" />
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-900/20 hidden md:flex">
            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-xl shadow-slate-200/50 dark:shadow-none mb-6">
              <Send size={40} className="text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Your Messages</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Select a conversation or start a new one.</p>
          </div>
        )}
      </div>
    </div>
  );
}
