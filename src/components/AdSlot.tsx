'use client';
import React, { useEffect, useRef } from 'react';

interface AdSlotProps {
  id: string;
  scriptSrc: string;
  label?: string;
}

export default function AdSlot({ id, scriptSrc, label = "Institutional Supporter" }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (adRef.current) {
      // 1. Clear previous content to avoid duplicate ads
      adRef.current.innerHTML = ''; 
      
      // 2. Create the script element
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;

      // 3. Inject it into the div
      adRef.current.appendChild(script);
    }
  }, [scriptSrc, id]);

  return (
    <div className="w-full my-12 flex flex-col items-center">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 mb-4">
        {label}
      </span>
      
      {/* ⚠️ THE FIX IS HERE: Change 'atcontainer-' to 'container-' */}
      <div 
        ref={adRef}
        id={`container-${id}`} 
        className="w-full max-w-5xl min-h-[90px] flex justify-center items-center bg-white/[0.01] rounded-xl overflow-hidden"
      >
        {/* Adsterra will look for the ID 'container-d672...' and place the ad here */}
      </div>
    </div>
  );
}