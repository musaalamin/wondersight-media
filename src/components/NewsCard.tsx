import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  color?: string;
}

export default function NewsCard({ title, excerpt, category, date, slug, color = "text-[#75C9B7]" }: NewsCardProps) {
  return (
    <Link href={`/news/${category.toLowerCase()}/${slug}`} className="block group">
      <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all duration-300 h-full flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className={`text-[10px] font-black uppercase tracking-widest ${color}`}>
              {category}
            </span>
            <span className="text-[10px] text-gray-600 font-medium">{date}</span>
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-gray-500 text-sm mt-3 line-clamp-3">
            {excerpt}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-white/5">
          <span className="text-[10px] font-bold uppercase text-gray-400 group-hover:text-white transition-colors">
            Read Full Analysis →
          </span>
        </div>
      </div>
    </Link>
  );
}