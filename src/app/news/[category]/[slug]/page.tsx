import React from 'react';
import Link from 'next/link';
import articles from '@/lib/articles.json';
import { notFound } from 'next/navigation';

export default function ArticlePage({ params }: { params: { category: string, slug: string } }) {
  // Find the specific article in your JSON
  const article = articles.find(a => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href={`/news/${params.category}`} className="text-[#75C9B7] text-xs font-bold uppercase mb-8 block">
          ← Back to {params.category}
        </Link>
        
        <header className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{article.date}</span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl text-gray-400 italic leading-relaxed">{article.excerpt}</p>
        </header>

        <div className="prose prose-invert max-w-none text-gray-300 leading-loose text-lg whitespace-pre-wrap">
          {article.content}
        </div>
        
        <div className="mt-20 p-8 bg-white/5 rounded-3xl border border-white/10 text-center">
          <p className="text-sm text-gray-500 mb-4 font-bold uppercase tracking-widest">Share this Analysis</p>
          <div className="flex justify-center gap-4">
            {/* Share buttons can go here later */}
          </div>
        </div>
      </article>
    </main>
  );
}