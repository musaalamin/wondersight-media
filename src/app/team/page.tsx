'use client';
import React, { useState, useEffect } from 'react';
import { client, urlFor } from '@/lib/sanity.client';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        // This query grabs your team from the Admin panel and sorts by your 'order' field
        const query = `*[_type == "teamMember"] | order(order asc)`;
        const data = await client.fetch(query);
        setTeamMembers(data);
      } catch (error) {
        console.error("Team Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#120B21] flex items-center justify-center">
        <div className="text-center animate-pulse uppercase text-[10px] font-black tracking-widest text-gray-600">
          Syncing Intelligence Bureau...
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-black mb-16 tracking-tighter uppercase italic">
          The <span className="text-[#E91E63]">Team</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div key={member._id || i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:border-[#E91E63]/50 transition-all duration-500 group flex flex-col items-center">
              <div className="w-28 h-28 rounded-3xl bg-gray-900 mb-6 overflow-hidden ring-4 ring-white/5 group-hover:ring-[#E91E63]/20 transition-all">
                {member.image && (
                  <img 
                    src={urlFor(member.image).width(400).url()} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500 scale-110 group-hover:scale-100" 
                  />
                )}
              </div>
              <h3 className="text-xl font-black mb-1 tracking-tight">{member.name}</h3>
              <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 text-center font-medium">
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
          <div 
            className="absolute inset-0 bg-[#120B21]/95 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          ></div>
          
          <div className="relative bg-[#1A112E] border border-white/10 w-full max-w-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-8 right-8 text-gray-500 hover:text-white font-black text-xl transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-40 h-40 flex-shrink-0 rounded-[2rem] overflow-hidden border-2 border-[#E91E63] shadow-lg shadow-[#E91E63]/10">
                {selectedMember.image && (
                  <img src={urlFor(selectedMember.image).width(600).url()} alt={selectedMember.name} className="w-full h-full object-cover" />
                )}
              </div>
              
              <div className="text-center md:text-left">
                <span className="text-[#E91E63] text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  {selectedMember.role}
                </span>
                <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter uppercase italic leading-tight">
                  {selectedMember.name}
                </h2>
                <div className="h-[1px] w-12 bg-[#E91E63] mb-6 mx-auto md:mx-0"></div>
                <p className="text-gray-300 text-lg leading-loose mb-8 font-medium">
                  {selectedMember.bio}
                </p>
                
                {selectedMember.linkedin && (
                  <a 
                    href={selectedMember.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#E91E63] text-white px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#E91E63]/20"
                  >
                    Connect on Social →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}