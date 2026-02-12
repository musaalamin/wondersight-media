import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/news" className="text-blue-500 text-xs font-bold uppercase mb-8 block tracking-widest">
          ← Newsroom Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Governance & <span className="text-blue-500">Security</span></h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Investigative reporting on public policy, local government accountability, and community-led peacebuilding in the Northwest.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NewsCard 
            title="Tracking Local Government Spending in Zamfara: A 2025 Audit"
            excerpt="Analyzing the allocation of rural development funds and their impact on community infrastructure..."
            category="Governance"
            date="FEB 10, 2026"
            slug="zamfara-audit-2025"
            color="text-blue-500"
          />
          <NewsCard 
            title="The Role of Community Vigilance Groups in Peacebuilding"
            excerpt="How local coordination is improving safety across rural corridors in Gusau and surrounding areas..."
            category="Security"
            date="FEB 05, 2026"
            slug="community-peacebuilding-security"
            color="text-blue-400"
          />
        </div>

        <AdSlot id="gov-sec-banner" scriptSrc="https://your-adsterra-script-here.js" />
      </div>
    </main>
  );
}