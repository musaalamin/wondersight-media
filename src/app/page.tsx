import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white selection:bg-[#E91E63]/30">
      
      {/* Hero Section with the New Vision */}
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
          We are **Wonder Sight Group**—a multidisciplinary digital media platform dedicated to 
          Solution Journalism, AI-driven Agriculture, and Community Storytelling. 
          Building on our heritage in cinematography and branding, we now pioneer 
          strategic digital solutions that address local challenges in 
          Northwestern Nigeria.
        </p>

        <div className="text-sm text-gray-500 leading-loose max-w-4xl border-t border-white/5 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <p>
            Our strength lies in **collaboration**. From investigating untold stories to 
            deploying AI for rural farmers through **NISECA Africa**, we pride ourselves 
            on a fresh, innovative approach that delivers world-class impact. 
          </p>
          <p>
            Whether through documenting climate resilience or providing a portal for 
            **Job Opportunities**, we bridge the gap between technology and the people. 
            You deal directly with a team committed to delivering clear, strategic, 
            and artistic depth in every project we execute.
          </p>
        </div>
      </section>

      {/* Quick Access Grid for the Ecosystem */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/niseca" className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#75C9B7] transition group">
            <h3 className="text-[#75C9B7] font-bold mb-2">NISECA Africa</h3>
            <p className="text-sm text-gray-500">AI-powered crop health and soil intelligence for local farmers.</p>
          </a>
          
          <a href="/jobs" className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-[#FF5722] transition group">
            <h3 className="text-[#FF5722] font-bold mb-2">Opportunities</h3>
            <p className="text-sm text-gray-500">Connecting Northern youth to NGO, Govt, and Creative roles.</p>
          </a>

          <a href="/daily-barakah" className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-400 transition group">
            <h3 className="text-blue-400 font-bold mb-2">Daily Barakah</h3>
            <p className="text-sm text-gray-500">Pure, ad-free spiritual growth and Quranic reflection.</p>
          </a>
        </div>
      </section>

    </main>
  );
}