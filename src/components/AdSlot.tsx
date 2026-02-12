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
    if (adRef.current) {
      adRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.type = 'text/javascript';
      script.async = true;
      
      // Error handling: if script fails to load
      script.onerror = () => {
        if (adRef.current) adRef.current.style.display = 'none';
      };

      adRef.current.appendChild(script);
    }
  }, [scriptSrc, id]); // Re-run if ID or Source changes

  return (
    <div className="w-full my-8 flex flex-col items-center">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-800 mb-4">
        {label}
      </span>
      
      <div 
        ref={adRef}
        key={scriptSrc} // This forces a full refresh of the ad unit
        id={`atcontainer-${id}`} 
        className="w-full max-w-[728px] min-h-[90px] flex justify-center items-center bg-white/[0.01] rounded-xl overflow-hidden"
      >
        {/* Ad will load here */}
      </div>
    </div>
  );
}