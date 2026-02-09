'use client';
import React, { useState } from 'react';

export default function VetPortal() {
  const [animal, setAnimal] = useState('poultry'); // poultry or fish

  return (
    <main className="min-h-screen bg-[#120B21] text-white p-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-[#E91E63] to-[#FF5722] bg-clip-text text-transparent mb-6">
        Vet Diagnostic Portal
      </h1>
      
      {/* Animal Selector */}
      <div className="flex gap-4 mb-8">
        {['poultry', 'fish'].map((type) => (
          <button 
            key={type}
            onClick={() => setAnimal(type)}
            className={`px-6 py-2 rounded-full capitalize border ${animal === type ? 'bg-[#E91E63] border-none' : 'border-white/20'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
        <div className="mb-4 text-[#75C9B7] text-sm font-semibold uppercase tracking-widest">
          AI {animal} Analysis
        </div>
        <p className="text-gray-400 mb-6">Upload a clear photo of the {animal === 'fish' ? 'gills or skin' : 'fecal matter or eye'} for instant diagnosis.</p>
        
        {/* Reusing your NISECA upload component logic here */}
        <button className="w-full py-4 bg-white/10 rounded-xl border-2 border-dashed border-white/20 hover:border-[#75C9B7] transition">
          Take Photo / Upload
        </button>
      </div>
    </main>
  );
}