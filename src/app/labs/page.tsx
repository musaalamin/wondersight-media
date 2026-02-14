import React from 'react';
import Link from 'next/link';

export default function LabPage() {
  const projects = [
    {
      title: "NISECA AI",
      tag: "Agricultural Research",
      desc: "Computer vision experiment for crop disease detection in Zamfara.",
      link: "/lab/niseca",
      status: "Active Research"
    },
    {
      title: "Rural Vet Portal",
      tag: "Livestock Healthcare",
      desc: "Digital support system prototype for small-scale poultry and fish farmers.",
      link: "/lab/rural-vet",
      status: "Beta Testing"
    }
  ];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-20 text-center md:text-left">
          <span className="text-[#E91E63] font-black uppercase tracking-widest text-xs">Innovation Hub</span>
          <h1 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tighter">THE <span className="text-[#75C9B7]">LAB</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            Wonder Sight Lab is our applied research unit. We build, break, and refine digital tools designed specifically for the unique environment of Northern Nigeria.
          </p>
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl inline-block">
            <p className="text-yellow-500 text-xs font-bold uppercase">⚠️ Note: Projects here are for research, not commercial use.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <Link key={p.link} href={p.link}>
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#75C9B7] transition group">
                <span className="text-[10px] font-black text-[#75C9B7] uppercase tracking-widest">{p.tag}</span>
                <h3 className="text-3xl font-bold mt-4 mb-4">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{p.desc}</p>
                <div className="flex justify-between items-center">
                   <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full font-bold uppercase">{p.status}</span>
                   <span className="text-white group-hover:translate-x-2 transition">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}