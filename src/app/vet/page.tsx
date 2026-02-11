'use client';
import React, { useState } from 'react';

export default function VetPortal() {
  const [animal, setAnimal] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleWhatsApp = () => {
    const message = `Hello Dr. Nana, I am using the Wonder Sight Vet Portal. I have a ${animal} health issue.`;
    window.open(`https://wa.me/2349031761998?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#120B21] text-white p-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-black text-[#75C9B7] mb-12">Vet Portal</h1>
        
        <div className="flex gap-4 justify-center mb-10">
          {['Poultry', 'Fish'].map(type => (
            <button 
              key={type} 
              onClick={() => setAnimal(type)}
              className={`px-8 py-4 rounded-2xl border-2 transition ${animal === type ? 'border-[#E91E63] bg-[#E91E63]/10' : 'border-white/10'}`}
            >
              {type}
            </button>
          ))}
        </div>

        {animal && (
          <div className="space-y-6 animate-in fade-in zoom-in-95">
            <label className="block p-10 border-2 border-dashed border-white/20 rounded-[3rem] cursor-pointer hover:border-[#75C9B7] transition">
              <input 
                type="file" 
                className="hidden" 
                onChange={(e) => setFile(e.target.files?.[0] || null)} 
              />
              <p className="text-gray-400">{file ? file.name : `Click to upload ${animal} photo`}</p>
            </label>

            {file && (
              <button 
                onClick={handleWhatsApp}
                className="w-full py-4 bg-[#25D366] rounded-2xl font-black uppercase tracking-widest text-xs"
              >
                Send to Dr. Nana via WhatsApp
              </button>
            )}
          </div>
        )}
      </div>
    </main>
  );
}