// Author: mauvehack
// File: src/components/GlitchGarden.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "AWS S3 Ransomware Sim",
    tag: "CLOUD SECURITY",
    desc: "Proof of concept demonstrating bucket enumeration and automated encryption mechanisms."
  },
  {
    title: "LLM Jailbreak Patterns",
    tag: "ADVERSARIAL AI",
    desc: "Research into prompt injection techniques against hardened language models."
  },
  {
    title: "Lateral Movement Ops",
    tag: "RED TEAMING",
    desc: "Active Directory compromise simulation using custom C2 infrastructure."
  }
];

const GlitchGarden = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-5xl mx-auto py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-neutral-800 h-64 border border-neutral-700 hover:border-pink-500 transition-colors overflow-hidden cursor-crosshair"
          >
            {/* The "Normal" Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between group-hover:opacity-0 transition-opacity duration-100">
              <div>
                <span className="text-xs text-pink-500 font-bold tracking-widest">{project.tag}</span>
                <h3 className="text-xl font-bold mt-2 text-white">{project.title}</h3>
              </div>
              <p className="text-sm text-neutral-400">{project.desc}</p>
            </div>

            {/* The "Glitch" Content (Revealed on Hover) */}
            <div className="absolute inset-0 bg-pink-900/20 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0">
              <h3 className="text-xl font-bold text-pink-400 font-mono">ACCESSING...</h3>
              <p className="text-xs font-mono text-green-400 mt-2">
                &gt; {project.title.toUpperCase()}_ROOT <br/>
                &gt; DECRYPTING_ASSETS... <br/>
                &gt; VIEW_GITHUB_REPO
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-8 py-3 border border-pink-500 text-pink-400 font-mono text-sm hover:bg-pink-500 hover:text-white transition-all uppercase tracking-widest">
          Enter The Glitch Garden
        </button>
      </div>
    </motion.div>
  );
};
export default GlitchGarden;