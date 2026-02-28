import React from 'react';
import { notFound } from 'next/navigation';
import { client, urlFor } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import ArticleGallery from '@/components/ArticleGallery'; // Import the new component

// Custom Styles for the Article Content (Headers, Lists, Body Text)
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-10 overflow-hidden rounded-2xl border border-white/10">
        <img src={urlFor(value).url()} alt={value.alt || 'Content Image'} className="w-full h-auto" />
        {value.caption && <p className="p-4 text-center text-[10px] text-gray-600 uppercase font-black tracking-widest">{value.caption}</p>}
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl font-black text-[#75C9B7] mt-12 mb-6 uppercase italic tracking-tighter">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-white mt-8 mb-4">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-6 leading-relaxed text-gray-300 font-medium">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-outside ml-6 space-y-4 mb-8 text-[#FF5722]">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="text-gray-300 pl-2 font-medium"><span>{children}</span></li>,
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  const article = await client.fetch(query, { slug });

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-24 px-6 font-sans">
      <article className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <Link href="/news" className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#75C9B7] mb-12 block transition-colors">
          ← Back to Newsroom
        </Link>
        
        {/* 1. Main Cover Image */}
        {article.mainImage && (
          <div className="mb-12 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src={urlFor(article.mainImage).width(1200).url()} 
              alt={article.title} 
              className="w-full h-auto object-cover" 
            />
          </div>
        )}

        {/* Header Section */}
        <header className="mb-12">
          <div className="flex gap-4 items-center mb-8">
             <span className="px-4 py-1.5 bg-[#75C9B7]/10 border border-[#75C9B7]/20 rounded-full text-[10px] font-black uppercase text-[#75C9B7] tracking-widest">
                {article.category}
             </span>
             <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{article.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter leading-[1.1]">{article.title}</h1>
          <p className="text-xl text-gray-400 border-l-2 border-[#FF5722] pl-6 py-2 font-medium leading-relaxed max-w-2xl">{article.excerpt}</p>
        </header>

        {/* 2. Clickable Gallery Section (New Component) */}
        {/* If the gallery has images, this will show the clickable grid */}
        <ArticleGallery images={article.gallery} />

        {/* 3. Main Text Content */}
        {/* Use max-w-3xl to keep the text easy to read on large screens */}
        <div className="max-w-3xl mx-auto text-lg leading-loose space-y-4">
          <PortableText value={article.content} components={ptComponents} />
        </div>

        {/* Footer Advisory */}
        <footer className="mt-20 pt-10 border-t border-white/5 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
          Wonder Sight Investigative Unit • {new Date().getFullYear()}
        </footer>
      </article>
    </main>
  );
}