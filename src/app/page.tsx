import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white selection:bg-[#E91E63]/30">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 max-w-5xl mx-auto">
        <div className="mb-8 p-[2px] rounded-full bg-gradient-to-r from-[#E91E63] to-[#FF5722]">
           <div className="bg-[#120B21] rounded-full px-6 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
             Beyond Storytelling • Digital Infrastructure
           </div>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
          Empowering the Sahel through <span className="text-[#FF5722]">Innovation</span> & <span className="text-[#75C9B7]">Media</span>
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl">
          We are Wonder Sight Group—a multidisciplinary digital media platform dedicated to 
          Solution Journalism, AI-driven Agriculture, and Community Storytelling. 
        </p>
      </section>

      {/* Quick Access Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          
          {/* 1. THE LAB (Consolidated NISECA & VET) */}
          <a href="/lab" className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#75C9B7] transition group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
              <span className="text-4xl">🧪</span>
            </div>
            <h3 className="text-[#75C9B7] font-bold mb-2 uppercase tracking-widest text-xs">Innovation Hub</h3>
            <h4 className="text-2xl font-black mb-2 text-white">The Lab</h4>
            <p className="text-sm text-gray-500 mb-6">Home to NISECA AI and Rural Vet research experiments.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-[#75C9B7] pb-1">Enter Research Space</span>
          </a>
          
          {/* 2. JOBS */}
          <a href="/jobs" className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#FF5722] transition group">
            <h3 className="text-[#FF5722] font-bold mb-2 uppercase tracking-widest text-xs">Careers</h3>
            <h4 className="text-2xl font-black mb-2 text-white">Opportunities</h4>
            <p className="text-sm text-gray-500 mb-6">Connecting Northern youth to NGO, Govt, and Creative roles.</p>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-[#FF5722] pb-1">View Job Board</span>
          </a>

          {/* 3. FOUNDATION */}
          <a href="/foundation" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-[#E91E63]/10 transition group">
            <h3 className="text-[#E91E63] font-bold mb-2 uppercase tracking-widest text-xs">Impact</h3>
            <h4 className="text-2xl font-black mb-2 text-white">Foundation</h4>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Climate education and youth mentorship across the Sahel.
            </p>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-[#E91E63] pb-1">Our Mission</span>
          </a>

          {/* 4. DAILY BARAKAH */}
          <a href="/daily-barakah" className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#75C9B7] transition group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 bg-[#75C9B7]/10 rounded-full flex items-center justify-center mb-6 text-xl">🌙</div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Daily <span className="text-[#75C9B7]">Barakah</span></h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">Spiritual companion for daily Adhkars and Quranic reflections.</p>
            </div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#75C9B7] border-b border-[#75C9B7] pb-1 w-fit">Open App</span>
          </a>

        </div>
      </section>
    </main>
  );
}