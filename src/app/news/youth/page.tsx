import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Youth & Opportunity | Wonder Sight News',
  description: 'Skills gaps, entrepreneurship, and employment trends for the Sahel generation.',
};

export default function YouthPage() {
  const articles = [
    { title: "The 2026 Youth Pulse: From Agriculture to Services", date: "Feb 11, 2026", snippet: "Why Nigerian youth are moving toward purpose-driven careers and digital entrepreneurship." },
    { title: "Bridging the Divide: Practical Training Outcomes", date: "Feb 05, 2026", snippet: "How market-linked TVET programs are reducing underemployment in Zamfara and beyond." }
  ];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/news" className="text-[#FF5722] text-xs font-bold uppercase mb-8 block">← Newsroom</Link>
        <h1 className="text-4xl font-black mb-4">Youth & <span className="text-[#FF5722]">Opportunity</span></h1>
        <p className="text-gray-400 mb-12 italic border-l-2 border-[#FF5722] pl-4">Tracking employment intelligence and skills development for the next generation.</p>

        <div className="space-y-12">
          {articles.map((art, i) => (
            <article key={i} className="group border-b border-white/5 pb-8">
              <span className="text-[10px] text-gray-500 font-bold uppercase">{art.date}</span>
              <h2 className="text-2xl font-bold mt-2 group-hover:text-[#FF5722] transition cursor-pointer">{art.title}</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">{art.snippet}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}