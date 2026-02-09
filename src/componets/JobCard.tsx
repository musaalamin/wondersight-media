'use client';
import React from 'react';

interface JobProps {
  title: string;
  org: string;
  link: string;
}

export default function JobCard({ title, org, link }: JobProps) {
  const handleApply = () => {
    const hasSeenAd = sessionStorage.getItem('ad_fired');
    const adLink = "https://your-adsterra-smartlink.com"; // Replace with your link

    if (!hasSeenAd) {
      sessionStorage.setItem('ad_fired', 'true');
      window.open(adLink, '_blank'); // Opens ad in new tab
      window.location.href = link;   // Keeps user on your site for the real job
    } else {
      window.location.href = link;   // Direct to job on second click
    }
  };

  return (
    <div className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-[#FF5722] transition mb-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{org}</p>
      <button 
        onClick={handleApply}
        className="w-full py-2 bg-gradient-to-r from-[#E91E63] to-[#FF5722] rounded-lg font-bold text-xs uppercase tracking-widest"
      >
        Apply Now
      </button>
    </div>
  );
}