import React from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';
import articles from '@/lib/articles.json'; 

export default function AgricultureNewsPage() {
  // Filter the articles to ONLY show Agriculture
  const agriArticles = articles.filter(article => article.category === 'Agriculture');

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/news" className="text-[#75C9B7] text-xs font-bold uppercase mb-8 block tracking-widest">
          ← Newsroom Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl font-black mb-4 uppercase tracking-tighter">
            Agriculture & <span className="text-[#75C9B7]">Innovation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            Latest reporting on NISECA AI and climate-smart farming in Northern Nigeria.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agriArticles.length > 0 ? (
            agriArticles.map((article) => (
              <NewsCard 
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                slug={article.slug}
                color="text-[#75C9B7]"
              />
            ))
          ) : (
            <p className="text-gray-600">No articles published in this category yet.</p>
          )}
        </div>

        <AdSlot 
          id="agri-news-ad" 
          scriptSrc="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js"
        />
      </div>
    </main>
  );
}