'use client';
import React, { useState } from 'react';
import jobsData from '@/lib/jobs-data.json';
import AdBanner from '@/components/AdBanner'; 

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All');
  // ... rest of your code ...

  const handleApply = (realLink: string) => {
    const hasSeenAd = sessionStorage.getItem('ad_fired');
    // REMEMBER: Replace this with your actual Adsterra Direct Link URL later
    const adLink = "https://your-adsterra-smartlink.com"; 

    if (!hasSeenAd) {
      sessionStorage.setItem('ad_fired', 'true');
      window.open(adLink, '_blank');
      window.location.href = realLink;
    } else {
      window.location.href = realLink;
    }
  };

  const filteredJobs = activeTab === 'All' 
    ? jobsData 
    : jobsData.filter(job => job.tag === activeTab);

  return (
    <main className="min-h-screen bg-[#120B21] text-white p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-black text-[#75C9B7] mb-2">Job Board</h1>
        <p className="text-gray-400">High-impact opportunities in Northern Nigeria.</p>
      </header>

      <div className="max-w-4xl mx-auto mb-10">
        <AdBanner />
      </div>

      <div className="max-w-4xl mx-auto flex gap-3 overflow-x-auto mb-10 pb-2">
        {['All', 'NGO', 'Agric', 'Govt', 'Creative'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase transition-all ${activeTab === tab ? 'bg-[#FF5722]' : 'bg-white/5 border border-white/10'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[9px] font-bold text-[#FF5722] bg-[#FF5722]/10 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  {job.tag}
                </span>
                <h3 className="text-xl font-bold mt-1">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.org} • 📍 {job.loc}</p>
              </div>
              <button 
                onClick={() => handleApply(job.link)}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#E91E63] to-[#FF5722] rounded-xl font-bold text-xs"
              >
                APPLY
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}