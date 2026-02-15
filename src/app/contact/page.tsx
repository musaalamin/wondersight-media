'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#120B21] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-black mb-6 tracking-tighter uppercase italic">
            Get in <span className="text-[#FF5722]">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a lead for the newsroom or interested in collaborating with the Lab? Reach out to the Wonder Sight team.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Card 1: General Inquiries */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-[#FF5722] transition-all">
            <h3 className="text-xl font-bold mb-4">General Inquiries</h3>
            <p className="text-gray-500 text-sm mb-8">For partnership opportunities, media requests, or general questions about our work in Zamfara.</p>
            <a href="mailto:wondersightgallery@gmail.com" className="text-[#FF5722] font-black uppercase tracking-widest text-xs border-b border-[#FF5722] pb-1">
              wondersightgallery@gmail.com
            </a>
          </div>

          {/* Contact Card 2: Research & Lab */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-[#75C9B7] transition-all">
            <h3 className="text-xl font-bold mb-4">Innovation & Lab</h3>
            <p className="text-gray-500 text-sm mb-8">Specifically for agricultural research, climate data collaboration, or the Rural-Vet pilot.</p>
            <a href="mailto:wondersightgallery@gmail.com" className="text-[#75C9B7] font-black uppercase tracking-widest text-xs border-b border-[#75C9B7] pb-1">
              Email Research Lead →
            </a>
          </div>
        </div>

        {/* Office/Base Info */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            Headquartered in Gusau, Zamfara State, Nigeria
          </p>
        </div>
      </div>
    </main>
  );
}