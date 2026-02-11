'use client';
import Script from 'next/script';
import React from 'react';

export default function AdBanner() { // Make sure the function name is AdBanner 
  return (
    <div className="w-full my-8 px-4 flex flex-col items-center overflow-hidden">
      {/* Label ensures AdSense sees this as transparent advertising */}
      <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-4">
        Suggested for You
      </p>
      
      {/* Replace 'YOUR_CONTAINER_ID' with the one from Adsterra */}
      <div id="container-d672b73a8fef1129ef5fdafb6f13212b" className="w-full max-w-5xl transition-all duration-500"></div>
      
      <Script
        id="adsterra-native"
        src="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js"
        strategy="lazyOnload"
        async={true}
      />
    </div>
  );
}