import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';

export default function AgriNews() {
  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-black mb-12 uppercase tracking-tighter">Agricultural Innovation</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard 
          title="NISECA AI: Early Detection of Maize Rust in Gusau"
          excerpt="Our technical team deployed the NISECA model across 50 hectares..."
          category="Agriculture"
          date="FEB 12, 2026"
          slug="niseca-maize-rust-gusau"
        />
        {/* Add more NewsCards here */}
      </div>

      {/* Insert Ad after the first row of news */}
      <AdSlot 
        id="d672b73a8fef1129ef5fdafb6f13212b" 
        scriptSrc="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js"
      />
    </main>
  );
}