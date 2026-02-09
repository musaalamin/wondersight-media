import React from 'react';

const teamMembers = [
  {
    name: "Khaliferh Musa Al-Amin",
    role: "Founder / Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000",
    bio: "Development Communications Specialist and Youth Climate Advocate based in Gusau.",
    link: "https://linkedin.com/in/khaliferh" // ADDED LINK
  },
 {
    name: "Sadiq S Fada",
    role: "Lead Marketing",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    bio: "Expert in livestock health and diagnostics, leading our Vet Portal initiatives.",
    link: "https://linkedin.com/in/nana-anka" // ADDED LINK
  },
  {
    name: "Dr. Nana Anka",
    role: "Lead Veterinary Consultant",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    bio: "Expert in livestock health and diagnostics, leading our Vet Portal initiatives.",
    link: "https://linkedin.com/in/nana-anka" // ADDED LINK
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Our <span className="text-[#E91E63]">Team</span></h1>
          <p className="text-gray-400">The minds behind the Wonder Sight Group innovation ecosystem.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#75C9B7] transition group">
              <div className="w-20 h-20 rounded-2xl bg-gray-800 mb-6 overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition" />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#75C9B7] text-sm mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
              <a 
                href={member.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs uppercase tracking-widest font-bold border-b border-[#E91E63] pb-1 hover:text-[#E91E63] transition"
              >
                LinkedIn Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}