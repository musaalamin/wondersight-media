'use client';
import React, { useEffect } from 'react';

interface AdSlotProps {
  id: string;
  scriptSrc: string;
  label?: string;
}

export default function AdSlot({ id, scriptSrc, label = "Sponsored Content" }: AdSlotProps) {
  
  useEffect(() => {
    // This forces the script to append to the body every time the component mounts
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    
    // Some Adsterra scripts need to be inside the specific container
    const container = document.getElementById(`container-${id}`);
    if (container) {
      container.appendChild(script);
    }

    return () => {
      // Cleanup to prevent multiple scripts loading on top of each other
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [id, scriptSrc]);

  return (
    <div className="w-full my-12 py-8 flex flex-col items-center border-y border-white/5 bg-white/[0.02]">
      <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-700 mb-6">
        {label}
      </span>
      
      <div id={`container-${id}`} className="w-full max-w-4xl min-h-[100px] flex justify-center">
        {/* The script will now be injected here manually by the useEffect */}
      </div>
    </div>
  );
}