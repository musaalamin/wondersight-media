'use client';
import React, { useState } from 'react';

const RISKS = {
  Poultry: {
    Rainy: { level: "High", threats: "Coccidiosis, Newcastle Disease", advice: "Ensure dry litter and improve ventilation to combat high humidity." },
    Dry: { level: "Moderate", threats: "Heat Stress, Gumboro", advice: "Increase water intake and provide cooling ventilation during peak heat." }
  },
  Cattle: {
    Rainy: { level: "Moderate", threats: "Foot Rot, Parasitic Gastroenteritis", advice: "Move herds to higher ground to avoid waterlogged pastures." },
    Dry: { level: "High", threats: "Contagious Bovine Pleuropneumonia (CBPP)", advice: "Monitor during communal watering; restrict contact with unknown herds." }
  },
  "Small Ruminants": {
    Rainy: { level: "High", threats: "PPR (Peste des Petits Ruminants)", advice: "Ensure pre-seasonal vaccination and keep housing areas dry." },
    Dry: { level: "Low", threats: "Nutritional Stress", advice: "Supplement with dry fodder as natural grazing quality declines." }
  }
};

export default function RuralVetLab() {
  const [animal, setAnimal] = useState<keyof typeof RISKS>('Poultry');
  const [season, setSeason] = useState<'Rainy' | 'Dry'>('Rainy');
  const [lang, setLang] = useState<'EN' | 'HA'>('EN');

  const activeRisk = RISKS[animal][season];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="relative mb-20 pt-10">
          <div className="flex justify-between items-center mb-8">
             <span className="px-4 py-1.5 bg-[#75C9B7]/10 border border-[#75C9B7]/20 text-[#75C9B7] text-[10px] font-black rounded-full uppercase tracking-widest">
               Zamfara Pilot Site
             </span>
             <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                <button onClick={() => setLang('EN')} className={`px-4 py-1.5 rounded-lg text-[9px] font-bold transition ${lang === 'EN' ? 'bg-white/10 text-white' : 'text-gray-500'}`}>EN</button>
                <button onClick={() => setLang('HA')} className={`px-4 py-1.5 rounded-lg text-[9px] font-bold transition ${lang === 'HA' ? 'bg-white/10 text-white' : 'text-gray-500'}`}>HA</button>
             </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">RURAL-<span className="text-[#75C9B7]">VET</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl italic font-medium">
              “Rural-Vet is a climate-linked seasonal livestock risk intelligence pilot operating in Zamfara State, designed to strengthen preventive animal health practices and improve smallholder resilience through research-based early warning insights.”
            </p>
          </div>
        </header>

        {/* 1️⃣ FARMER ADVISORY LAYER */}
        <section className="mb-24">
          <div className="mb-10 p-6 border border-amber-500/20 bg-amber-500/5 backdrop-blur-md rounded-2xl flex items-start gap-4">
            <span className="text-xl">⚠️</span>
            <p className="text-xs text-amber-200/70 leading-relaxed">
              <strong>Institutional Disclaimer:</strong> This platform provides research-based seasonal livestock risk information for Zamfara State and does not replace professional veterinary diagnosis or treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[2rem]">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4 block">Livestock Species</label>
                <div className="flex flex-col gap-2">
                  {Object.keys(RISKS).map(type => (
                    <button key={type} onClick={() => setAnimal(type as any)}
                      className={`px-6 py-3 rounded-xl text-left text-xs font-bold transition ${animal === type ? 'bg-[#75C9B7] text-black' : 'bg-white/5 hover:bg-white/10'}`}>
                      {type}
                    </button>
                  ))}
                </div>

                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mt-8 mb-4 block">Current Season</label>
                <div className="flex gap-2">
                  {['Rainy', 'Dry'].map(s => (
                    <button key={s} onClick={() => setSeason(s as any)}
                      className={`flex-1 py-3 rounded-xl text-xs font-bold transition ${season === s ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Intelligence Display */}
            <div className="lg:col-span-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] h-full">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-black mb-2">{animal} Intelligence</h3>
                    <p className="text-gray-500 text-sm">Seasonal Early Warning Status</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${activeRisk.level === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                    Risk: {activeRisk.level}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[#75C9B7] text-[10px] font-black uppercase tracking-widest mb-2">Primary Threats</h4>
                      <p className="text-sm text-gray-300 font-medium">{activeRisk.threats}</p>
                    </div>
                    <div>
                      <h4 className="text-[#75C9B7] text-[10px] font-black uppercase tracking-widest mb-2">Preventive Guidance</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{activeRisk.advice}</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/5">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-widest mb-4">When to Consult a Vet</h4>
                    <ul className="text-xs text-gray-500 space-y-3">
                      <li>• Sudden decrease in feed/water intake</li>
                      <li>• Respiratory distress or nasal discharge</li>
                      <li>• Abnormal mortality within the herd</li>
                      <li>• Visible skin lesions or lameness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2️⃣ INSTITUTIONAL INTELLIGENCE LAYER */}
        <section className="border-t border-white/10 pt-20">
          <header className="mb-12">
            <h2 className="text-2xl font-black tracking-tight mb-4 uppercase">Institutional Intelligence Panel</h2>
            <div className="h-1 w-20 bg-[#75C9B7]"></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h4 className="text-xs font-black uppercase text-[#75C9B7] mb-4">Pilot Coverage</h4>
              <p className="text-sm text-gray-400 leading-relaxed">Currently monitoring LGAs: Gusau, Tsafe, and Shinkafi. Data is aggregated from regional climate stations and community reporting sentinel nodes.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h4 className="text-xs font-black uppercase text-[#75C9B7] mb-4">Impact Tracker</h4>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div>
                  <p className="text-2xl font-black">12</p>
                  <p className="text-[9px] text-gray-500 uppercase font-bold">Sentinel Farms</p>
                </div>
                <div>
                  <p className="text-2xl font-black">84%</p>
                  <p className="text-[9px] text-gray-500 uppercase font-bold">Advice Adoption</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl flex flex-col justify-between">
              <h4 className="text-xs font-black uppercase text-[#75C9B7] mb-4">Data Methodology</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed italic">Combining historical rainfall onset patterns with species-specific thermal comfort indices to predict vector-borne disease outbreaks.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}