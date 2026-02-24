'use client';
import React, { useState } from 'react';

const teamMembers = [
  {
    name: "Khaliferh Musa Al-Amin",
    role: "Founder / CVTO",
    image: "/team/khalifa.webp",
    bio: "Founder and Chief Vision Officer of Wonder Sight Group. He leads the transition into Solution Journalism and AI-driven agriculture in Northern Nigeria. His work focuses on bridging the gap between traditional reporting and technology-led community development.",
    link: "https://www.linkedin.com/in/khaliferh-musa-4979341a7" 
  },
  {
    name: "Yusuf Anka",
    role: "Advisor",
    image: "/team/yusuf.webp",
    bio: "Former BBC journalist and security expert. His experience in humanitarian work and journalism shapes the vision of Wonder Sight Foundation. Yusuf provides critical insights into security dynamics and community resilience in the Sahel region.",
    link: "https://www.linkedin.com/in/yusuf-anka-2a6749112" 
  },
  {
    name: "Jimeh Saleh",
    role: "Advisor",
    image: "/team/Jimeh.webp",
    bio: "Seasoned journalist and former senior producer at BBC Hausa. He brings invaluable guidance to our frontline reporting and media innovation, ensuring that Wonder Sight maintains global editorial standards.",
    link: "https://www.linkedin.com/in/jimeh-saleh-a20992202" 
  },
  {
    name: "Ibrahim Tukur",
    role: "On Air Personal",
    image: "/team/ibrahim.webp",
    bio: "Ibrahim Tukur is an accomplished On-Air Personality and Director of News at Shamuwa Global FM, recognized for his unwavering commitment to professional journalism ethics, accuracy, and responsible digital reporting.",
    link: "https://www.facebook.com/share/1CBEuWqkNY/?mibextid=wwXIfr" 
  },
  {
    name: "Buhari Morikie",
    role: "Community Developer",
    image: "/team/buhari.webp",
    bio: "Buhari is a humanitarian activist and community development advocate committed to promoting good governance and social accountability. Their work focuses on empowering underserved communities, strengthening civic participation, and advancing sustainable development initiatives. Through grassroots engagement and policy advocacy, Buhari bridges the gap between government and the governed.",
    link: "https://www.facebook.com/buhari.morikie" 
  },
  {
    name: "Muhammad Bello",
    role: "Creative Director",
    image: "/team/muhammad.webp",
    bio: "Leads visual and creative strategy. With a background in cinematography, he ensures cohesive storytelling across all our platforms, focusing on the visual identity of Wonder Sight's documentaries and digital media.",
    link: "https://www.linkedin.com/in/bello-muhammad-anka-552b82270" 
  },
  {
    name: "Sadiq S. Fada",
    role: "Director of Operations",
    image: "/team/sadiq.webp",
    bio: "Manages operations and institutional coordination, overseeing project execution and partnerships to ensure sustainable growth and logistical excellence across Zamfara and beyond.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery/" 
  },
  {
    name: "Sa'adaah Ibrahim",
    role: "Senior Editor",
    image: "/team/saa.webp",
    bio: "Oversees editorial direction, ensuring accuracy and integrity in our coverage of governance, agriculture, and youth development. She maintains the rigorous fact-checking standards that define Wonder Sight News.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery" 
  }
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-16 tracking-tighter uppercase italic">
          The <span className="text-[#E91E63]">Team</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:border-[#E91E63]/50 transition-all duration-500 group relative flex flex-col items-center">
              <div className="w-28 h-28 rounded-3xl bg-gray-900 mb-6 overflow-hidden ring-4 ring-white/5 group-hover:ring-[#E91E63]/20 transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 scale-110 group-hover:scale-100" 
                />
              </div>
              <h3 className="text-xl font-black mb-1 tracking-tight">{member.name}</h3>
              <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
              
              {/* Short Bio View */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 text-center">
                {member.bio}
              </p>
              
              <button 
                onClick={() => setSelectedMember(member)}
                className="mt-auto text-[10px] font-black uppercase bg-white/5 hover:bg-[#E91E63] px-6 py-2 rounded-full transition-all tracking-tighter"
              >
                View Full Bio +
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL SECTION */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#120B21]/90 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-[#1A112E] border border-white/10 w-full max-w-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-8 right-8 text-gray-500 hover:text-white font-black text-xl"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-40 h-40 flex-shrink-0 rounded-[2rem] overflow-hidden border-2 border-[#E91E63]">
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="text-center md:text-left">
                <span className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  {selectedMember.role}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic">
                  {selectedMember.name}
                </h2>
                <div className="h-[1px] w-12 bg-[#E91E63] mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-300 text-lg leading-loose mb-8 font-medium">
                  {selectedMember.bio}
                </p>
                
                <a 
                  href={selectedMember.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-[#E91E63] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#E91E63]/20"
                >
                  Connect on Social →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}