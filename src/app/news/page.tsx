import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';

const categories = [
  { title: "Governance & Security", slug: "governance-security", color: "border-blue-500", desc: "Policy analysis and civic accountability in the Sahel." },
  { title: "Agriculture", slug: "agriculture", color: "border-[#75C9B7]", desc: "Climate-smart innovation and NISECA AI case studies." },
  { title: "Youth", slug: "youth", color: "border-[#FF5722]", desc: "Employment intelligence and entrepreneurship profiles." }
];

export default function NewsroomPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-black mb-6 tracking-tighter text-white">
          THE <span className="text-[#FF5722]">NEWSROOM</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Solution-oriented journalism focusing on the technical and civic growth of Northwestern Nigeria.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/news/${cat.slug}`}>
            <div className={`p-8 bg-white/5 border-l-4 ${cat.color} rounded-2xl hover:bg-white/10 transition cursor-pointer h-full`}>
              <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Enter Beat →</span>
            </div>
          </Link>
        ))}
      </div>

      <hr className="border-white/5 mb-20 max-w-6xl mx-auto" />

      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-black uppercase tracking-widest mb-10 text-center">
          Latest <span className="text-[#75C9B7]">Reports</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard 
            title="Tracking Local Government Spending in Zamfara"
            excerpt="Analyzing the allocation of rural development funds and their impact on community infrastructure..."
            category="Governance"
            date="FEB 10, 2026"
            slug="zamfara-audit-2025"
            color="text-blue-500"
          />
          <NewsCard 
            title="NISECA AI: Early Detection of Maize Rust in Gusau"
            excerpt="Our technical team deployed the NISECA model across 50 hectares with 92% accuracy..."
            category="Agriculture"
            date="FEB 12, 2026"
            slug="niseca-maize-rust-gusau"
          />
          {/* UPDATED SKILLS GAP CARD */}
          <NewsCard 
            title="The Skills Gap: What Employers in Northern Nigeria Want"
            excerpt="A survey of 50 local NGOs reveals the top 5 missing skills in job seekers..."
            category="Youth"
            date="FEB 08, 2026"
            slug="skills-gap-survey-2026" 
            color="text-[#FF5722]"
          />
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <AdSlot 
           id="main-news-banner" 
           scriptSrc="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js" 
           label="Institutional Supporter"
        />
      </div>
    </main>
  );
}