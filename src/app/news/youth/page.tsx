import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';
import articles from '@/lib/articles.json'; // THIS WAS MISSING

export default function YouthPage() {
  const youthArticles = articles.filter(article => article.category === 'youth');
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      {/* ... rest of your existing code ... */}
      <div className="max-w-6xl mx-auto">
        <Link href="/news" className="text-[#FF5722] text-xs font-bold uppercase mb-8 block tracking-widest">
          ← Newsroom Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Youth & <span className="text-[#FF5722]">Intelligence</span></h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Data-driven reporting on the youth job market, entrepreneurship trends, and digital skills development.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <NewsCard 
            title="Zamfara’s Emerging Tech Hubs: Why Now?"
            excerpt="A look at the rise of freelance digital labor among university graduates in the state capital..."
            category="Youth"
            date="FEB 12, 2026"
            slug="zamfara-tech-hubs-growth"
            color="text-[#FF5722]"
          />
          <NewsCard 
            title="The Skills Gap: What Employers in Northern Nigeria Want"
            excerpt="A survey of 50 local NGOs and businesses reveals the top 5 missing skills in job seekers..."
            category="Employment"
            date="FEB 08, 2026"
            slug="skills-gap-survey-2026"
            color="text-[#FF7043]"
          />
        </div>

        <AdSlot id="youth-banner" scriptSrc="https://your-adsterra-script-here.js" />
      </div>
    </main>
  );
}