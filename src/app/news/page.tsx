import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';
import articles from '@/lib/articles.json';

const categories = [
  { title: "Governance & Accountability", slug: "governance-security", color: "border-blue-500", desc: "Policy analysis and civic accountability in the Sahel." },
  { title: "Agriculture & Climate Systems", slug: "agriculture", color: "border-[#75C9B7]", desc: "Climate-smart innovation and NISECA AI research." },
  { title: "Security & Community Stability", slug: "security", color: "border-red-500", desc: "Reporting on peace-building and regional security dynamics." },
  { title: "Youth & Employment", slug: "youth", color: "border-[#FF5722]", desc: "Employment intelligence and entrepreneurship profiles." }
];

export default function NewsroomPage() {
  // AUTO-SORT LOGIC: This sorts articles by date (Newest First)
  const sortedArticles = [...articles].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedArticles[0];
  const reports = sortedArticles.slice(1, 7); // Show next 6 after the featured one

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6 font-sans">
      
      {/* 1️⃣ UPDATED HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
          Wonder Sight <span className="text-[#FF5722]">Newsroom</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          Independent, solution-driven reporting on governance, agriculture, security, and youth systems in Northwest Nigeria.
        </p>
      </div>

      {/* 2️⃣ FEATURED INVESTIGATION (Glassmorphism) */}
      {featured && (
        <section className="max-w-6xl mx-auto mb-24">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-[#75C9B7]">Featured Investigation</h2>
          <Link href={`/news/${featured.category}/${featured.slug}`}>
            <div className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] group hover:border-[#FF5722]/50 transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-[10px] font-bold bg-[#FF5722]/10 text-[#FF5722] px-3 py-1 rounded-full uppercase mb-6 inline-block">
                    {featured.category}
                  </span>
                  <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-[#FF5722] transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                    <span>{featured.date}</span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span className="uppercase tracking-widest text-white">Read Full Analysis →</span>
                  </div>
                </div>
                <div className="hidden lg:block h-64 bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
                   {/* Placeholder for future investigation imagery */}
                   <div className="w-full h-full bg-gradient-to-br from-[#120B21] to-[#FF5722]/10 flex items-center justify-center">
                      <span className="text-white/5 font-black text-9xl">WS</span>
                   </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 3️⃣ EDITORIAL BEATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/news/${cat.slug}`}>
            <div className={`p-8 bg-white/5 border-l-4 ${cat.color} rounded-2xl hover:bg-white/10 transition cursor-pointer h-full`}>
              <h3 className="text-sm font-black mb-3 uppercase tracking-wider">{cat.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{cat.desc}</p>
              <span className="text-[9px] font-black uppercase tracking-widest text-white/30">Enter Beat →</span>
            </div>
          </Link>
        ))}
      </div>

      {/* 4️⃣ LATEST REPORTS GRID */}
      <section className="max-w-6xl mx-auto mb-32">
        <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-12 border-b border-white/5 pb-4">Latest <span className="text-[#75C9B7]">Reports</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((article) => (
            <NewsCard 
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              date={article.date}
              slug={article.slug}
            />
          ))}
        </div>
      </section>

      {/* 5️⃣ EDITORIAL STANDARDS (Glassmorphism) */}
      <section className="max-w-6xl mx-auto mb-20 bg-white/[0.02] backdrop-blur-md border border-white/5 rounded-[3rem] p-12 text-center">
        <h2 className="text-2xl font-black mb-10 uppercase tracking-tighter">Editorial Standards</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Independent", desc: "No external influence" },
            { label: "Non-partisan", desc: "Neutral reporting" },
            { label: "Evidence-based", desc: "Verified data only" },
            { label: "Community-informed", desc: "Grassroots perspective" }
          ].map((std, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-[#75C9B7] font-black uppercase text-xs tracking-widest">{std.label}</h4>
              <p className="text-gray-600 text-[10px] uppercase font-bold">{std.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ ADSLOT (Moved for Credibility) */}
      <div className="max-w-6xl mx-auto">
        <AdSlot 
           id="d672b73a8fef1129ef5fdafb6f13212b" 
           scriptSrc="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js" 
           label="Institutional Supporter"
        />
      </div>
    </main>
  );
}