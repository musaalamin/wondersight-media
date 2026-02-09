import React from 'react';

const pillars = [
  { title: "Storytelling & Media", desc: "Documenting the untold stories of everyday people in Northwestern Nigeria." },
  { title: "Solutions Journalism", desc: "Reporting on health, education, and climate resilience in rural areas." },
  { title: "Social Impact Tech", desc: "Building digital tools like LAFIYAMATABOT for livelihood challenges." },
  { title: "Mentorship", desc: "Training local journalists and mentoring young tech entrepreneurs." },
  { title: "Policy Advocacy", desc: "Influencing policy changes through evidence-based storytelling." }
];

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6">Wonder Sight <span className="text-[#E91E63]">Foundation</span></h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            We are dedicated to creation of compelling visual content and digital tools 
            that drive community development across the Sahel.
          </p>
        </header>

        <div className="grid gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-[#E91E63]/5 transition group">
              <span className="text-[#FF5722] font-mono text-xs font-bold block mb-2">0{i + 1}</span>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#E91E63] transition">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <section className="mt-20 p-10 bg-gradient-to-br from-[#E91E63] to-[#FF5722] rounded-[3rem] text-center">
          <h2 className="text-3xl font-black mb-4 italic">NextGen Entrepreneurship</h2>
          <p className="mb-8 font-medium">Join our next bootcamp merging business, climate action, and technology.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition">
            Learn More
          </button>
        </section>
      </div>
    </main>
  );
}