import React from 'react';
import Link from 'next/link';

export default function LabPage() {
  const impactMetrics = [
    { label: "Farmers Engaged", value: "37" },
    { label: "Images Processed", value: "120" },
    { label: "Prototype Iterations", value: "3" },
    { label: "Field Interviews Conducted", value: "4" }
  ];

  const labNotes = [
    { 
      tag: "🧪 Lab Note 01", 
      title: "Model Compression & Latency Optimization", 
      content: "Initial testing revealed high response latency under 3G connectivity. After model compression, average processing time reduced by ~22%. Further refinement is ongoing." 
    },
    { 
      tag: "🧪 Lab Note 02", 
      title: "User Interface Localization Feedback", 
      content: "Field interviews indicate that farmers prefer simplified interfaces with Hausa-language prompts. Current revisions focus on improving clarity and reducing technical jargon." 
    },
    { 
      tag: "🧪 Lab Note 03", 
      title: "Image Quality Variability Challenge", 
      content: "Model accuracy decreases under poor lighting. Exploring preprocessing enhancements to improve classification reliability in non-ideal scenarios." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <header className="mb-24 text-center">
          <span className="text-[#E91E63] font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Applied Innovation Unit</span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">THE <span className="text-[#75C9B7]">LAB</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            A documentation space for our innovation and research experiments. We build, break, and refine digital tools for the unique conditions of Northern Nigeria.
          </p>
        </header>

        {/* 1️⃣ INNOVATION APPROACH */}
        <section className="mb-32 bg-white/[0.02] border border-white/5 p-12 rounded-[3rem]">
          <h2 className="text-2xl font-black mb-8 uppercase tracking-tight">Our Innovation Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-gray-400 leading-loose space-y-4">
              <p>Wonder Sight Lab operates on a structured <span className="text-white font-bold">test–measure–refine</span> model designed for real-world conditions in Northern Nigeria.</p>
              <p>We do not build tools in isolation. Every project begins with a defined local problem, followed by field experimentation, user feedback cycles, and technical iteration.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 text-sm">
              {[
                { title: "1. Test Before Scaling", desc: "Small, controlled pilot deployments over unverified launches." },
                { title: "2. Measure Transparently", desc: "Metrics and limitations are documented and acknowledged." },
                { title: "3. Design for Constraints", desc: "Built for 3G/4G, low-cost phones, and Hausa accessibility." }
              ].map((p, i) => (
                <div key={i} className="border-l border-[#75C9B7]/30 pl-6">
                  <h4 className="text-white font-bold mb-1">{p.title}</h4>
                  <p className="text-gray-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2️⃣ PROJECT CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* NISECA CARD */}
          <Link href="/lab/niseca" className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all">
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-[9px] font-black rounded-full uppercase tracking-widest">🧪 Pilot Testing</span>
              <span className="px-3 py-1 bg-gray-500/10 text-gray-400 text-[9px] font-black rounded-full uppercase tracking-widest">⚙️ Infrastructure Opt</span>
            </div>
            <h3 className="text-4xl font-black mb-4 group-hover:text-[#75C9B7] transition">NISECA AI</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Computer vision experiment for crop disease detection in Zamfara.</p>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white">View Research Note →</span>
          </Link>

          {/* VET CARD */}
          <Link href="/lab/rural-vet" className="group p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all">
            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-[9px] font-black rounded-full uppercase tracking-widest">🔬 Prototype Phase</span>
            </div>
            <h3 className="text-4xl font-black mb-4 group-hover:text-[#E91E63] transition">RURAL VET</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">Digital support experiment for small-scale livestock farmers.</p>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white">View Research Note →</span>
          </Link>
        </section>

        {/* 3️⃣ IMPACT SNAPSHOT */}
        <section className="mb-32">
          <h2 className="text-xl font-black mb-10 text-center uppercase tracking-widest">Lab Impact Snapshot</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactMetrics.map((m, i) => (
              <div key={i} className="text-center p-8 border border-white/5 rounded-3xl bg-white/[0.01]">
                <div className="text-4xl font-black text-white mb-2">{m.value}</div>
                <div className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 4️⃣ LAB NOTES */}
        <section className="max-w-3xl mx-auto mb-32">
          <h2 className="text-2xl font-black mb-12 uppercase">Latest Lab Notes</h2>
          <div className="space-y-12">
            {labNotes.map((note, i) => (
              <div key={i} className="relative pl-8 border-l border-white/10">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-[#E91E63]"></div>
                <span className="text-[9px] font-black text-[#E91E63] uppercase tracking-widest mb-2 block">{note.tag}</span>
                <h4 className="text-xl font-bold mb-3">{note.title}</h4>
                <p className="text-gray-500 text-sm leading-loose">{note.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5️⃣ CTA */}
        <section className="text-center py-20 bg-[#E91E63]/5 border border-[#E91E63]/10 rounded-[3rem]">
          <h2 className="text-3xl font-black mb-6">Partner With Wonder Sight Lab</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            We welcome collaboration with researchers, agricultural institutions, NGOs, and civic technology partners interested in applied innovation in Northern Nigeria.
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#E91E63] hover:text-white transition">
            Start Collaboration
          </Link>
        </section>

      </div>
    </main>
  );
}