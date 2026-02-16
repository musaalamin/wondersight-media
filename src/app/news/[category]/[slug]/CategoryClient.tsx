'use client';
import React, { useState, useEffect } from 'react';
import { client, urlFor } from '@/lib/sanity.client';
import NewsCard from '@/components/NewsCard';
import Link from 'next/link';

export default function CategoryClient({ category }: { category: string }) {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        let query = category === 'governance-security' 
          ? `*[_type == "post" && (category match "Governance" || category match "Security")] | order(date desc)`
          : `*[_type == "post" && category match "${category}"] | order(date desc)`;
        
        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryNews();
  }, [category]);

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <Link href="/news" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#75C9B7] mb-8 block">
          ← Back to Newsroom
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
            Archive: <span className="text-[#FF5722]">{category.replace('-', ' & ')}</span>
          </h1>
          
          {/* LIVE SEARCH BAR */}
          <div className="mt-10 max-w-xl">
            <input 
              type="text"
              placeholder="Filter by keyword (e.g. Abuja, Policy)..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-[#75C9B7] outline-none transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {loading ? (
          <div className="py-20 text-center animate-pulse text-gray-600 font-black uppercase text-[10px]">Syncing Intelligence...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <NewsCard 
                key={article._id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                slug={article.slug.current}
                image={article.mainImage ? urlFor(article.mainImage).width(600).url() : null}
              />
            ))}
          </div>
        )}

        {/* NEWSLETTER SUBSCRIPTION SECTION */}
        <section className="mt-32 p-12 bg-white/[0.02] border border-white/5 rounded-[3rem] text-center">
          <h2 className="text-2xl font-black mb-4 uppercase italic">Join the <span className="text-[#75C9B7]">Barakah</span> List</h2>
          <p className="text-gray-500 mb-8 text-xs uppercase tracking-widest font-bold">Get instant job alerts and investigative briefs</p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input type="email" placeholder="Your email address" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm" required />
            <button className="bg-[#FF5722] px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest">Subscribe</button>
          </form>
        </section>
      </div>
    </main>
  );
}