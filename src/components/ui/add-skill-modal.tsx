import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, LayoutTemplate, Clock, Target } from 'lucide-react';
import { cn } from "@/lib/utils";
import { useAppContext } from '@/contexts/AppContext';

type AddSkillModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const steps = [
  { id: 1, title: 'Basics', icon: LayoutTemplate },
  { id: 2, title: 'Details', icon: Target },
  { id: 3, title: 'Logistics', icon: Clock },
];

export function AddSkillModal({ isOpen, onClose }: AddSkillModalProps) {
  const { addSkill } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    duration: '',
    classes: '',
    price: '',
  });

  // Handle Close
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(1);
      setFormData({ title: '', category: '', description: '', duration: '', classes: '', price: '' });
    }, 300); // Reset after exit animation
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border-2 border-slate-100 z-[60] flex flex-col max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight" style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}>
                Add a New Skill
              </h2>
              <button 
                onClick={handleClose}
                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Stepper Progress */}
            <div className="bg-slate-50 p-6 flex justify-between relative overflow-hidden">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 z-0" />
              <div 
                className="absolute top-1/2 left-0 h-[2px] bg-blue-600 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out" 
                style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }} 
              />
              
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                return (
                  <div key={step.id} className="relative z-10 flex flex-col items-center gap-2">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-2",
                      isActive ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30" : 
                      isCompleted ? "bg-blue-600 text-white border-blue-600" : 
                      "bg-white text-slate-400 border-slate-200"
                    )}>
                      {isCompleted ? <CheckCircle2 size={20} strokeWidth={3} /> : <Icon size={18} strokeWidth={2.5} />}
                    </div>
                    <span className={cn(
                      "text-xs font-bold uppercase tracking-wider absolute -bottom-6 w-max text-center transition-colors duration-300",
                      isActive ? "text-blue-600" : "text-slate-400"
                    )}>
                      {step.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Form Area */}
            <div className="p-8 flex-1 overflow-y-auto mt-4">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Skill Title</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Advanced Figma Prototyping"
                        value={formData.title}
                        onChange={(e) => setFormData({...formData, title: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Category</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none"
                      >
                        <option value="">Select a category</option>
                        <option value="Web Dev">Web Development</option>
                        <option value="Design">Design</option>
                        <option value="Music">Music</option>
                        <option value="Languages">Languages</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Culinary">Culinary</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Description</label>
                      <textarea 
                        placeholder="Describe what you will teach, your experience, and what the student will achieve..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={5}
                        className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col gap-6"
                  >
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Duration per Lesson</label>
                        <div className="relative">
                          <input 
                            type="number" 
                            placeholder="45"
                            value={formData.duration}
                            onChange={(e) => setFormData({...formData, duration: e.target.value})}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-4 pr-16 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm pointer-events-none">mins</span>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Total Classes</label>
                         <div className="relative">
                          <input 
                            type="number" 
                            placeholder="5"
                            value={formData.classes}
                            onChange={(e) => setFormData({...formData, classes: e.target.value})}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-4 pr-16 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm pointer-events-none">sessions</span>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">Credit Price</label>
                        <div className="relative">
                          <input 
                            type="number" 
                            placeholder="150"
                            value={formData.price}
                            onChange={(e) => setFormData({...formData, price: e.target.value})}
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-4 pr-16 py-3 text-slate-800 font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm pointer-events-none">credits</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4 mt-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={20} strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">Almost Done!</h4>
                        <p className="text-sm text-blue-700 font-medium">By publishing this skill, you agree to our community guidelines for skill swapping.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Buttons */}
            <div className="p-6 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
              <button 
                onClick={() => currentStep > 1 && setCurrentStep(s => s - 1)}
                className={cn(
                  "px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all",
                  currentStep > 1 ? "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-sm" : "opacity-0 pointer-events-none"
                )}
              >
                <ArrowLeft size={18} strokeWidth={2.5} /> Back
              </button>
              
              <button 
                onClick={() => {
                  if (currentStep < steps.length) {
                    setCurrentStep(s => s + 1);
                  } else {
                    addSkill({
                      title: formData.title,
                      category: formData.category,
                      description: formData.description,
                      duration: Number(formData.duration) || 45,
                      classes: Number(formData.classes) || 1,
                      price: Number(formData.price) || 0,
                      color: 'blue'
                    });
                    handleClose();
                  }
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/30"
              >
                {currentStep === steps.length ? 'Publish Skill' : 'Next Step'} <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
