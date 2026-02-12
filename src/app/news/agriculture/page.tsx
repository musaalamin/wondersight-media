import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Agriculture News | Wonder Sight Group',
  description: 'Reporting on AI-driven farming and climate resilience in Northern Nigeria.',
};

export default function AgriNewsPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/news" className="text-[#75C9B7] text-xs font-bold uppercase mb-8 block">← Back to Newsroom</Link>
        <h1 className="text-4xl font-black mb-4">Agriculture & <span className="text-[#75C9B7]">Innovation</span></h1>
        <p className="text-gray-400 mb-12 italic border-l-2 border-[#75C9B7] pl-4">Covering the intersection of climate resilience and AI technology in Zamfara.</p>

        <div className="space-y-12">
          {/* Sample Article 1 */}
          <article className="group">
            <span className="text-[10px] text-[#75C9B7] font-bold uppercase">Tech Case Study</span>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-[#75C9B7] transition cursor-pointer">How NISECA AI Diagnosed 500+ Farms in Gusau</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">A deep dive into the impact of automated crop disease detection for local smallholder farmers...</p>
          </article>

          {/* Sample Article 2 */}
          <article className="group">
            <span className="text-[10px] text-[#75C9B7] font-bold uppercase">Climate Report</span>
            <h2 className="text-2xl font-bold mt-2 group-hover:text-[#75C9B7] transition cursor-pointer">The Earth Keepers: Preparing for a Shorter Rainy Season</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">Experts suggest new irrigation methods as climate patterns shift across the Sahel region...</p>
          </article>
        </div>
      </div>
    </main>
  );
}