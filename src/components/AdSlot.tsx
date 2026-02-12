'use client';
import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  id: string;
  scriptSrc: string;
  label?: string;
}

export default function AdSlot({ id, scriptSrc, label = "Sponsored Content" }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Clear the container to avoid duplicates
    if (adRef.current) {
      adRef.current.innerHTML = '';
      
      // 2. Create the script element manually
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;

      // 3. Append to the div
      adRef.current.appendChild(script);
    }
  }, [scriptSrc]); // Re-run if the script source changes

  return (
    <div className="w-full my-12 py-8 flex flex-col items-center border-y border-white/5 bg-white/[0.02]">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-6">
        {label}
      </span>
      
      {/* The Ad Container */}
      <div 
        ref={adRef}
        id={`atcontainer-${id}`} 
        className="w-full max-w-4xl min-h-[100px] flex justify-center overflow-hidden"
      >
        {/* Adsterra script will live here */}
      </div>
    </div>
  );
}