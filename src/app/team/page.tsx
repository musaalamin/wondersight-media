import React from 'react';

const teamMembers = [
  {
    name: "Khaliferh Musa Al-Amin",
    role: "Founder / CVO",
    image: "/team/khalifa.webp", // Updated to .webp
    bio: "Khalifa is the Founder and Chief Vision Officer of Wonder Sight Group, established in 2018. He leads the organization’s transition from creative media into a hybrid platform focused on Solution Journalism, AI-driven agriculture, and youth development in Northern Nigeria. His work centers on connecting storytelling with practical digital innovation to drive measurable community impact.",
    link: "https://www.linkedin.com/in/khaliferh-musa-4979341a7" 
  },
{
    name: "Yusuf Anka",
    role: "Advisor",
    image: "/team/yusuf.webp", // Updated to .webp
    bio: "Yusuf Anka is a former BBC journalist, humanitarian, and security expert who reported extensively on Zamfara’s bandit warlords in the BBC Africa Eye documentary. His unique blend of experience in humanitarian work, security, and journalism will play a key role in shaping the vision and impact of Wonder Sight Gallery and Wonder Sight Foundation.",
    link: "https://www.linkedin.com/in/yusuf-anka-2a6749112" 
  },
{
    name: "Buhari Moriki",
    role: "Senior Manager",
    image: "/team/buhari.webp", // Updated to .webp
    bio: "Morikie is a humanitarian activist and community development advocate committed to promoting good governance and social accountability. Their work focuses on empowering underserved communities, strengthening civic participation, and advancing sustainable development initiatives. Through grassroots engagement and policy advocacy, they support efforts that foster transparency, resilience, and inclusive growth.",
    link: "https://www.facebook.com/buhari.morikie" 
  },
  {
    name: "Jimeh Saleh",
    role: "Advisor",
    image: "/team/jimeh.webp", // Updated to .webp
    bio: "Jimeh Saleh is a seasoned journalist and former senior producer and editor with the BBC Hausa Service. He was among the first to report directly from Boko Haram’s Sambisa Forest hideout. With his wealth of experience in frontline reporting, media innovation, and diversity advocacy, he brings invaluable guidance that will shape the future direction of Wonder Sight.",
    link: "https://www.linkedin.com/in/jimeh-saleh-a20992202" 
  },
{
    name: "Muhammad Bello",
    role: "Creative Director",
    image: "/team/muhammad.webp", // Updated to .webp
    bio: "Muhammad leads the visual and creative strategy of Wonder Sight Group. With a background in cinematography and branding, they ensure cohesive storytelling and strong visual identity across all platforms and productions.",
    link: "https://www.linkedin.com/in/bello-muhammad-anka-552b82270" 
  },
{
    name: "Sadiq S. Fada",
    role: "Director of Operations",
    image: "/team/sadiq.webp", // Updated to .webp
    bio: "Sadiq manages operations and institutional coordination across Wonder Sight’s media and innovation arms. They oversee project execution, partnerships, and internal systems to ensure sustainable growth and efficiency.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery/" 
  },
  {
    name: "Sa'adaah Ibrahim",
    role: "Senior Editor",
    image: "/team/saa.webp", // Updated to .webp
    bio: "oversees the editorial direction of Wonder Sight News, ensuring accuracy, balance, and evidence-based reporting. The Editor leads coverage on governance, agriculture, and youth development while maintaining strong editorial integrity across all publications.",
    link: "https://www.linkedin.com/company/wonder-sight-gallery" 
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
            The <span className="text-[#E91E63]">Team</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The technical and creative minds building the digital infrastructure for Northwestern Nigeria.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#E91E63] transition-all duration-300 group">
              <div className="w-24 h-24 rounded-2xl bg-gray-900 mb-6 overflow-hidden border border-white/5">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy" // Added for performance
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  onError={(e) => { e.currentTarget.src = "https://ui-avatars.com/api/?name=" + member.name + "&background=120B21&color=fff"; }}
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-[#E91E63] text-xs font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">{member.bio}</p>
              <a 
                href={member.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block text-[10px] uppercase tracking-[0.2em] font-black border-b-2 border-[#E91E63] pb-1 hover:text-[#E91E63] transition-colors"
              >
                Connect on LinkedIn →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}