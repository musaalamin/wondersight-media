'use client';
import React from 'react';
import Script from 'next/script';

interface AdSlotProps {
  id: string;
  scriptSrc: string;
  label?: string;
}

export default function AdSlot({ id, scriptSrc, label = "Sponsored Content" }: AdSlotProps) {
  return (
    <div className="w-full my-12 py-8 flex flex-col items-center border-y border-white/5 bg-white/[0.02]">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-6">
        {label}
      </span>
      
      {/* Ad Container */}
      <div id={`container-${id}`} className="w-full max-w-4xl min-h-[100px] flex justify-center">
        {/* Adsterra/AdSense will inject the ad here */}
      </div>

      <Script
        id={`ad-script-${id}`}
        src={scriptSrc}
        strategy="lazyOnload"
      />
    </div>
  );
}