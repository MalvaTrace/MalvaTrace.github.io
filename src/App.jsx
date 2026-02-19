// Author: mauvehack
// File: src/App.jsx
// Description: Main entry point. Updated for brand hierarchy: Adonis (Primary) -> Mauvehack (Secondary).

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MalvaAxiom from './components/MalvaAxiom';
import GlitchGarden from './components/GlitchGarden';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-neutral-900 text-pink-50 font-mono selection:bg-pink-500 selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-neutral-900/90 backdrop-blur-md border-b border-pink-900/30">
        <h1 
          className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 cursor-pointer"
          onClick={() => setActiveSection('home')}
        >
          MALVA TRACE
        </h1>
        <div className="space-x-6 text-sm hidden md:block">
          <button onClick={() => setActiveSection('axiom')} className="hover:text-pink-400 transition-colors uppercase tracking-widest">The Axiom</button>
          <button onClick={() => setActiveSection('garden')} className="hover:text-pink-400 transition-colors uppercase tracking-widest">Glitch Garden</button>
          <button onClick={() => window.open('https://github.com/mauvehack', '_blank')} className="hover:text-pink-400 transition-colors uppercase tracking-widest">GitHub</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-32 px-6 md:px-20 container mx-auto">
        <AnimatePresence mode="wait">
          
          {/* HOME SECTION */}
          {activeSection === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center"
            >
              {/* VEO VIDEO PLACEHOLDER */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-pink-900 to-black mb-10 border border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.15)] flex items-center justify-center overflow-hidden relative group">
                 <div className="absolute inset-0 bg-neutral-900 opacity-20 mix-blend-overlay"></div>
                 {/* Glitch effect on hover */}
                 <span className="text-pink-500/50 text-xs tracking-widest group-hover:text-pink-400 transition-colors duration-300">
                   [ VEO SIGNAL LOST ]
                 </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
                ADONIS ESTRELLA
              </h2>
              
              <div className="flex items-center space-x-4 mb-8">
                 <span className="h-[1px] w-12 bg-pink-500/50"></span>
                 <p className="text-xl text-pink-200/80 tracking-[0.2em] uppercase">Offensive Security Engineer</p>
                 <span className="h-[1px] w-12 bg-pink-500/50"></span>
              </div>
              
              <div className="bg-neutral-800/50 px-6 py-2 rounded-full border border-pink-500/20 mb-8">
                 <span className="text-xs text-neutral-400 font-mono tracking-widest mr-2">HANDLE:</span>
                 <span className="text-sm text-pink-500 font-bold font-mono">MAUVEHACK</span>
              </div>
              
              <p className="max-w-xl text-neutral-400 leading-relaxed">
                Conducting security simulations in a controlled environment. 
                Specializing in Adversarial Simulation, Red Teaming, and AI Security.
              </p>
            </motion.div>
          )}

          {/* AXIOM SECTION */}
          {activeSection === 'axiom' && (
            <MalvaAxiom key="axiom" />
          )}

          {/* GLITCH GARDEN (PROJECTS) */}
          {activeSection === 'garden' && (
             <GlitchGarden key="garden" />
          )}

        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <footer className="fixed bottom-4 right-6 text-[10px] text-neutral-600 font-mono">
        <p>SYSTEM: ONLINE // <span className="text-pink-900">MALVA BLACK: RESTRICTED</span></p>
      </footer>
    </div>
  );
};

export default App;