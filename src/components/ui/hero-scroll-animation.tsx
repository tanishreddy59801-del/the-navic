import React from 'react';
import { motion } from 'framer-motion';

const DiscoverPassions = () => {
  return (
    <section className='relative w-full py-24 bg-slate-50 text-slate-900'>
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none'></div>
      <article className='container mx-auto relative z-10 w-full px-6 flex flex-col items-center'>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className='text-4xl md:text-6xl leading-[1.1] pb-16 font-bold tracking-tight text-center max-w-5xl' 
          style={{ fontFamily: "'Fredoka', 'Nunito', sans-serif" }}
        >
          Discover your passions. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect with learners worldwide.</span>
        </motion.h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl'>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-white shadow-xl border border-slate-200/60"
          >
            <img
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800'
              alt='Coding'
              className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-bold text-lg text-white">Web Dev</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: -32 }} /* md:-translate-y-8 */
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-white shadow-xl border border-slate-200/60 md:translate-y-0"
          >
            <img
              src='https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800'
              alt='Guitar'
              className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-bold text-lg text-white">Guitar</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 32 }} /* md:translate-y-8 */
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.3 }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-white shadow-xl border border-slate-200/60 md:translate-y-0"
          >
            <img
              src='https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800'
              alt='Cooking'
              className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-bold text-lg text-white">Culinary Arts</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5] bg-white shadow-xl border border-slate-200/60"
          >
            <img
              src='https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800'
              alt='Painting'
              className='object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100'
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent pointer-events-none" />
            <span className="absolute bottom-4 left-4 font-bold text-lg text-white">Painting</span>
          </motion.div>

        </div>
      </article>
    </section>
  );
};

export default DiscoverPassions;
