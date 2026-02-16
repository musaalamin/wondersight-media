'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsCard from '@/components/NewsCard';
import AdSlot from '@/components/AdSlot';
import { client, urlFor } from '@/lib/sanity.client';

const categories = [
  { title: "Governance & Accountability", slug: "governance-security", color: "border-blue-500", desc: "Policy analysis." },
  { title: "Security & Stability", slug: "governance-security", color: "border-red-500", desc: "Regional security." },
  { title: "Agriculture & Climate", slug: "agriculture", color: "border-[#75C9B7]", desc: "Climate innovation." },
  { title: "Youth & Employment", slug: "youth", color: "border-[#FF5722]", desc: "Entrepreneurship profiles." }
];

export default function NewsroomPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const query = `*[_type == "post"] | order(date desc) {
          _id, title, slug, excerpt, category, date, mainImage
        }`;
        const data = await client.fetch(query);
        setArticles(data);
      } catch (error) {
        console.error("Newsroom Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featured = filteredArticles[0];
  const reports = filteredArticles.slice(1, 10);

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6 font-sans">
      
      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic">
          Wonder Sight <span className="text-[#FF5722]">Newsroom</span>
        </h1>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
          Independent reporting on governance, agriculture, security, and youth.
        </p>
      </div>

      {/* SEARCH INPUT BOX */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="relative group">
          <input 
            type="text"
            placeholder="Search investigations (e.g. El-Rufai, Agriculture)..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-[#75C9B7] transition-all text-sm font-medium backdrop-blur-sm"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute right-6 top-5 text-gray-600 font-black text-xs uppercase tracking-widest group-focus-within:text-[#75C9B7]">
            Search
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 animate-pulse text-gray-600 uppercase text-[10px] font-black tracking-widest">
          Syncing Intelligence...
        </div>
      ) : (
        <>
          {/* FEATURED SECTION */}
          {!searchQuery && featured && (
            <section className="max-w-6xl mx-auto mb-24">
              <Link href={`/news/${featured.category.toLowerCase()}/${featured.slug.current}`}>
                <div className="relative overflow-hidden bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] group hover:border-[#FF5722]/50 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="text-[10px] font-bold bg-[#FF5722]/10 text-[#FF5722] px-3 py-1 rounded-full uppercase mb-6 inline-block tracking-widest">
                        {featured.category}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight group-hover:text-[#FF5722] transition-colors italic tracking-tighter">
                        {featured.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">{featured.excerpt}</p>
                      <span className="text-xs font-bold text-white uppercase tracking-widest border-b-2 border-[#FF5722] pb-1">
                        Read Analysis →
                      </span>
                    </div>
                    <div className="hidden lg:block h-72 rounded-3xl overflow-hidden border border-white/5">
                       {featured.mainImage && (
                         <img src={urlFor(featured.mainImage).width(800).url()} className="w-full h-full object-cover" alt={featured.title} />
                       )}
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* EDITORIAL BEATS */}
          {!searchQuery && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32 max-w-6xl mx-auto">
              {categories.map((cat) => (
                <Link key={cat.title} href={`/news/${cat.slug}`}>
                  <div className={`p-8 bg-white/5 border-l-4 ${cat.color} rounded-2xl hover:bg-white/10 transition h-full group`}>
                    <h3 className="text-sm font-black mb-3 uppercase tracking-wider group-hover:text-white">{cat.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{cat.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* REPORTS GRID */}
          <section className="max-w-6xl mx-auto mb-32">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] mb-12 border-b border-white/5 pb-4">
              {searchQuery ? 'Search Results' : 'Latest Reports'}
            </h2>
            
            {reports.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reports.map((article) => (
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
            ) : (
              <div className="text-center py-20 text-gray-500 italic">
                No reports found matching your search.
              </div>
            )}
          </section>
        </>
      )}

      {/* SUBSCRIBE SECTION */}
      <section className="max-w-6xl mx-auto mb-32 p-12 bg-white/[0.02] border border-[#75C9B7]/20 rounded-[3rem] text-center backdrop-blur-sm">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">
            Join the <span className="text-[#75C9B7]">Intelligence</span> Brief
          </h2>
          <p className="text-gray-400 mb-10 text-sm leading-relaxed">
            Receive the latest investigative reports and instant job alerts in Gusau. No spam, just institutional clarity.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#75C9B7] text-sm"
            />
            <button className="px-10 py-4 bg-[#FF5722] text-white font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-[#ff6a3d] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CORRECTED ADSLOT SECTION */}
      <AdSlot 
        id="d672b73a8fef1129ef5fdafb6f13212b" 
        scriptSrc="https://pl28696234.effectivegatecpm.com/d672b73a8fef1129ef5fdafb6f13212b/invoke.js" 
        label="Institutional Supporter" 
      />
    </main>
  );
}