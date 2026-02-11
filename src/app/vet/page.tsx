'use client';
import React, { useState } from 'react';

const SYMPTOMS = {
  Poultry: ["Coughing/Sneezing", "Diarrhea", "Drop in Egg Production", "Swollen Head", "Limping"],
  Fish: ["Gasping for Air", "White Spots", "Loss of Appetite", "Erratic Swimming", "Floating Upside Down"]
};

export default function VetPortal() {
  const [animal, setAnimal] = useState<'Poultry' | 'Fish' | ''>('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const toggleSymptom = (s) => {
    setSelectedSymptoms(prev => prev.includes(s) ? prev.filter(i => i !== s) : [...prev, s]);
  };

  const handleWhatsApp = () => {
    const report = `VET REPORT FROM WONDERSIGHT:\nAnimal: ${animal}\nSymptoms: ${selectedSymptoms.join(', ')}`;
    window.open(`https://wa.me/2349031761998?text=${encodeURIComponent(report)}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-[#75C9B7] mb-8">Vet <span className="text-white">Diagnostics</span></h1>
        
        {/* Step 1: Select Animal */}
        <div className="flex gap-4 mb-10">
          {['Poultry', 'Fish'].map(type => (
            <button key={type} onClick={() => {setAnimal(type as any); setSelectedSymptoms([]);}}
              className={`flex-1 p-6 rounded-3xl border-2 transition ${animal === type ? 'border-[#E91E63] bg-[#E91E63]/10' : 'border-white/5 bg-white/5'}`}>
              {type}
            </button>
          ))}
        </div>

        {/* Step 2: Symptom Checklist */}
        {animal && (
          <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 animate-in fade-in">
            <h3 className="text-xl font-bold mb-6">Select Symptoms for {animal}:</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {SYMPTOMS[animal as keyof typeof SYMPTOMS].map(s => (
                <button key={s} onClick={() => toggleSymptom(s)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition ${selectedSymptoms.includes(s) ? 'bg-[#75C9B7] text-black' : 'bg-white/10 text-gray-400'}`}>
                  {s}
                </button>
              ))}
            </div>
            <button onClick={handleWhatsApp} disabled={selectedSymptoms.length === 0}
              className="w-full py-4 bg-[#25D366] rounded-2xl font-black text-xs uppercase tracking-widest disabled:opacity-30">
              Generate Report & Chat with Dr. Nana
            </button>
          </div>
        )}
      </div>
    </main>
  );
}