import React from 'react';

const teamMembers = [
  {
    name: "Khaliferh Musa Al-Amin",
    role: "Founder / CVO",
    image: "/team/khalifa.webp",
    bio: "Founder and Chief Vision Officer of Wonder Sight Group. He leads the transition into Solution Journalism and AI-driven agriculture in Northern Nigeria.",
    link: "https://www.linkedin.com/in/khaliferh-musa-4979341a7" 
  },
  {
    name: "Yusuf Anka",
    role: "Advisor",
    image: "/team/yusuf.webp",
    bio: "Former BBC journalist and security expert. His experience in humanitarian work and journalism shapes the vision of Wonder Sight Foundation.",
    link: "https://www.linkedin.com/in/yusuf-anka-2a6749112" 
  },
  {
    name: "Jimeh Saleh",
    role: "Advisor",
    image: "/team/jimeh.webp",
    bio: "Seasoned journalist and former senior producer at BBC Hausa. He brings invaluable guidance to our frontline reporting and media innovation.",
    link: "https://www.linkedin.com/in/jimeh-saleh-a20992202" 
  },
  {
    name: "Muhammad Bello",
    role: "Creative Director",
    image: "/team/muhammad.webp",
    bio: "Leads visual and creative strategy. With a background in cinematography, he ensures cohesive storytelling across all our platforms.",
    link: "https://www.linkedin.com/in/bello-muhammad-anka-552b82270" 
  },
  {
    name: "Sadiq S. Fada",
    role: "Director of Operations",
    image: "/team/sadiq.webp",
    bio: "Manages operations and institutional coordination, overseeing project execution and partnerships to ensure sustainable growth.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery/" 
  },
  {
    name: "Sa'adaah Ibrahim",
    role: "Senior Editor",
    image: "/team/saa.webp",
    bio: "Oversees editorial direction, ensuring accuracy and integrity in our coverage of governance, agriculture, and youth development.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery" 
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-12 tracking-tighter uppercase">The <span className="text-[#E91E63]">Team</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#E91E63] transition group">
              <div className="w-24 h-24 rounded-2xl bg-gray-900 mb-6 overflow-hidden mx-auto">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-[#E91E63] text-xs font-black uppercase mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 h-24 overflow-hidden">{member.bio}</p>
              <a href={member.link} target="_blank" className="text-[10px] font-black uppercase border-b-2 border-[#E91E63] pb-1">LinkedIn Profile →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}