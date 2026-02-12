import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Governance & Security | Wonder Sight News',
  description: 'Analyzing policy impact and security reforms in Northwestern Nigeria.',
};

export default function GovernancePage() {
  const articles = [
    { title: "Reading the Signals: Governance in 2026", date: "Feb 12, 2026", snippet: "How institutions in Nigeria are shifting toward dignity-based governance and institutional intelligence." },
    { title: "Northern Security Trust Fund: A Regional Strategy", date: "Jan 10, 2026", snippet: "Breaking down the impact of the 1 billion Naira monthly state contributions to regional safety." }
  ];

  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/news" className="text-blue-400 text-xs font-bold uppercase mb-8 block">← Newsroom</Link>
        <h1 className="text-4xl font-black mb-4">Governance & <span className="text-blue-500">Security</span></h1>
        <p className="text-gray-400 mb-12 italic border-l-2 border-blue-500 pl-4">Solution-oriented reporting on policy, accountability, and peacebuilding.</p>

        <div className="space-y-12">
          {articles.map((art, i) => (
            <article key={i} className="group border-b border-white/5 pb-8">
              <span className="text-[10px] text-gray-500 font-bold uppercase">{art.date}</span>
              <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-400 transition cursor-pointer">{art.title}</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">{art.snippet}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}