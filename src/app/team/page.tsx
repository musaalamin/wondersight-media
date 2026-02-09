import React from 'react';

const teamMembers = [
  { 
    name: "Musa Al-Amin", 
    role: "Founder / Lead Developer", 
    image: "/team/musa.webp",
    bio: "Lead Developer at Wonder Sight Creatives and Technical Assistant at Zamfara State Government House." 
  },
  { 
    name: "Dr. Nana Anka", 
    role: "Lead Veterinary Consultant", 
    image: "/team/nana.webp",
    bio: "Expert Veterinary Doctor managing livestock diagnostics and farmer outreach." 
  },
  { 
    name: "Member 3", 
    role: "Content & Solutions Journalist", 
    image: "/team/member3.webp",
    bio: "Specializing in documenting local solutions across the Sahel." 
  },
  { 
    name: "Member 4", 
    role: "Climate Action Researcher", 
    image: "/team/member4.webp",
    bio: "Focused on NISECA Africa's environmental data and policy engagement." 
  },
  { 
    name: "Member 5", 
    role: "Community Manager", 
    image: "/team/member5.webp",
    bio: "Managing the NextGen Bootcamps and youth empowerment programs." 
  },
  { 
    name: "Member 6", 
    role: "Graphic Designer", 
    image: "/team/member6.webp",
    bio: "Crafting the visual identity and digital assets for Wonder Sight Media." 
  },
  { 
    name: "Member 7", 
    role: "Field Coordinator", 
    image: "/team/member7.webp",
    bio: "Direct liaison between rural farmers and the NISECA technical team." 
  }
];
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Meet the <span className="text-[#FF5722]">Team</span></h1>
        <p className="text-gray-400 mb-12 max-w-2xl">The multidisciplinary minds behind Wonder Sight, working to build the digital infrastructure of Northern Nigeria.</p>

        {/* Responsive Grid: 1 col on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E91E63] transition group">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#E91E63] to-[#FF5722] rounded-full mb-4 mx-auto md:mx-0"></div>
              <h3 className="text-xl font-bold group-hover:text-[#FF5722] transition">{member.name}</h3>
              <p className="text-[#75C9B7] text-sm mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
              <a href={member.link} className="text-xs uppercase tracking-widest font-bold border-b border-[#E91E63] pb-1">LinkedIn Profile</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}