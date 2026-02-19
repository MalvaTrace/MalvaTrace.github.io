// Author: mauvehack
// File: src/components/MalvaAxiom.jsx
import React from 'react';
import { motion } from 'framer-motion';

const MalvaAxiom = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="max-w-3xl mx-auto py-12"
    >
      <div className="border-l-2 border-pink-500 pl-6 md:pl-12 space-y-8">
        <div>
          <h3 className="text-pink-500 text-xs font-bold tracking-[0.2em] mb-2">CLASSIFICATION: PINK // ORIGIN</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">THE MALVA AXIOM</h2>
        </div>

        <p className="text-lg leading-relaxed text-neutral-300">
          In a landscape of grey walls and black hats, <span className="text-pink-400 font-semibold">color is a vulnerability</span>. Or so they think.
        </p>

        <p className="text-lg leading-relaxed text-neutral-300">
          The Malva (Malva sylvestris) is an ancient disruptor. To the casual observer it is a harmless splash of pink petals. Soft. Inviting. Organic. It signals safety. It bypasses the psychological firewall.
        </p>

        {/* THE AXIOM BOX */}
        <div className="bg-neutral-800/50 p-6 rounded-sm border border-pink-500/10">
          <h4 className="text-white font-bold mb-4">This is the axiom of modern offensive security:</h4>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-4 font-mono">01 //</span>
              <span><strong className="text-pink-300">The Pink (Interface):</strong> We present the professional, compliant, and "soft" face. We are authorized. We are the "Social Engineering" of nature.</span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-4 font-mono">02 //</span>
              <span><strong className="text-pink-300">The Root (Access):</strong> Beneath the pink lies the taproot. Resilient. Persistent. Deep. We anchor where others cannot. We survive where others are weeded out.</span>
            </li>
          </ul>
        </div>

        {/* CENTERED LOGO */}
        <div className="flex justify-center py-8">
           <img 
             src="/logo.png" 
             alt="Malva Trace Protocol" 
             className="w-24 h-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_0_15px_rgba(236,72,153,0.4)]" 
             onError={(e) => e.target.style.display = 'none'}
           />
        </div>

        {/* FINAL SLOGAN */}
        <div className="text-center">
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600 tracking-wider">
            TRUST THE PINK. RESPECT THE ROOT.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default MalvaAxiom;