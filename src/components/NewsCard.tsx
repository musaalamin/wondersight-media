import React from 'react';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  image?: string | null; // Added image property
  color?: string;
}

export default function NewsCard({ title, excerpt, category, date, slug, image, color = "text-[#75C9B7]" }: NewsCardProps) {
  
  const getFolder = (cat: string) => {
  const check = cat.toLowerCase();
  // If the category is Governance, Security, or our new combined string
  if (check.includes('govern') || check.includes('secur')) {
    return 'governance-security';
  }
  return check; 
};

  const folder = getFolder(category);

  return (
    <Link href={`/news/${folder}/${slug}`} className="block group">
      <div className="bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.08] transition-all duration-500 h-full flex flex-col overflow-hidden">
        
        {/* IMAGE SECTION */}
        {image ? (
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        ) : (
          <div className="h-48 bg-gradient-to-br from-[#120B21] to-white/5 flex items-center justify-center">
             <span className="text-white/5 font-black text-4xl italic tracking-tighter uppercase">Wonder Sight</span>
          </div>
        )}

        <div className="p-6 flex flex-col flex-1 justify-between">
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
            <p className="text-gray-500 text-sm mt-3 line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5">
            <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-[#FF5722] transition-colors tracking-widest">
              Read Analysis →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}