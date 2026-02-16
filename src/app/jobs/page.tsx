'use client';
import React, { useState, useEffect } from 'react';
import { client } from '@/lib/sanity.client'; // This connects to your updated pipe
import AdBanner from '@/components/AdBanner'; 

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [jobs, setJobs] = useState<any[]>([]); // Start with an empty list
  const [loading, setLoading] = useState(true);

  // --- SANITY FETCH LOGIC ---
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // This query gets everything from Sanity and sorts by date
        const query = `*[_type == "job"] | order(date desc)`;
        const data = await client.fetch(query);
        setJobs(data);
      } catch (error) {
        console.error("Sanity Connection Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const handleApply = (realLink: string) => {
    const adLink = "https://www.effectivegatecpm.com/tvzhnpve?key=8f36116b749a55da6ead042c04377bb7"; 
    const adWindow = window.open(adLink, '_blank');
    if (!adWindow || adWindow.closed || typeof adWindow.closed === 'undefined') {
      window.location.href = adLink;
    } else {
      window.location.href = realLink;
    }
  };

  const filteredJobs = activeTab === 'All' 
    ? jobs 
    : jobs.filter(job => job.tag === activeTab);

  return (
    <main className="min-h-screen bg-[#120B21] text-white p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-black text-[#75C9B7] mb-2 tracking-tighter uppercase">Job Board</h1>
        <p className="text-gray-400">Powered by Wonder Sight Lab Intelligence</p>
      </header>

      <div className="max-w-4xl mx-auto mb-10">
        <AdBanner />
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto flex gap-3 overflow-x-auto mb-10 pb-2 no-scrollbar">
        {['All', 'NGO', 'Agric', 'Govt', 'Creative', 'Scholarship'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase transition-all whitespace-nowrap ${activeTab === tab ? 'bg-[#FF5722] text-white' : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {loading ? (
          <div className="text-center py-20 animate-pulse text-gray-600 uppercase text-[10px] font-black tracking-[0.3em]">
            Fetching Live Opportunities...
          </div>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job._id} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-black text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                      {job.tag}
                    </span>
                    <span className="text-[9px] text-gray-600 font-bold uppercase">{job.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mt-1 text-white">{job.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{job.org} • 📍 {job.loc}</p>
                </div>
                <button 
                  onClick={() => handleApply(job.link)}
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#E91E63] to-[#FF5722] rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/20"
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500 italic uppercase text-[10px] font-black tracking-widest">No listings found in this sector.</p>
          </div>
        )}
      </div>
    </main>
  );
}