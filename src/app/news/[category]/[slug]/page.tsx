import React from 'react';
import Link from 'next/link';
import articles from '@/lib/articles.json';
import { notFound } from 'next/navigation';

// This is the fixed version for Next.js 14/15
export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  
  // FIX: We must "await" the params now
  const { slug, category } = await params;

  // Find the article in your JSON
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href={`/news/${category}`} className="text-[#75C9B7] text-xs font-bold uppercase mb-8 block tracking-widest">
          ← Back to {category}
        </Link>
        
        <header className="mb-12">
          <div className="flex gap-3 items-center mb-6">
             <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase text-[#75C9B7]">
                {article.category}
             </span>
             <span className="text-[10px] font-bold text-gray-600">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{article.title}</h1>
        </header>

        <div className="text-gray-300 leading-loose text-lg whitespace-pre-wrap">
          {article.content}
        </div>
      </article>
    </main>
  );
}