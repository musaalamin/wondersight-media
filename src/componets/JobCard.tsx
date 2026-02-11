'use client';
import React from 'react';

interface JobProps {
  title: string;
  org: string;
  link: string;
}

export default function JobCard({ title, org, link }: JobProps) {
  const handleApply = () => {
    // 1. Check if user has already seen an ad this session
    const adFired = sessionStorage.getItem('ad_fired');
    
    // 2. Your Adsterra Direct Link URL (Get this from Adsterra Dashboard)
    const directLink = "https://your-adsterra-smartlink-url.com";

    if (!adFired) {
      // First click: Open ad and redirect to job
      sessionStorage.setItem('ad_fired', 'true');
      window.open(directLink, '_blank'); // Opens ad in new tab
      window.location.href = link;      // Sends user to actual job on current tab
    } else {
      // Subsequent clicks: Go straight to the job
      window.location.href = link;
    }
  };

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-[#FF5722] transition group">
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF5722] transition">{title}</h3>
      <p className="text-gray-500 text-sm mb-6">{org}</p>
      <button 
        onClick={handleApply}
        className="w-full py-3 bg-white text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#E91E63] hover:text-white transition"
      >
        Apply Now
      </button>
    </div>
  );
}