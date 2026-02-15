import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonder Sight Media & Foundation",
  description: "Digital Solutions and Solution Journalism for Northern Nigeria",
  other: {
    "google-adsense-account": "ca-pub-9706843263138053",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9706843263138053"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />
      </head>
      <body className={`${inter.className} bg-[#120B21] text-white antialiased`}>
        
        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-[#120B21]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-black bg-gradient-to-r from-[#E91E63] to-[#FF5722] bg-clip-text text-transparent shrink-0">
              WONDER SIGHT
            </a>
            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <a href="/news" className="hover:text-[#FF5722] transition">News</a>
              <a href="/lab" className="hover:text-[#75C9B7] transition">Innovation Lab</a>
              <a href="/jobs" className="hover:text-[#FF5722] transition">Jobs</a>
              <a href="/foundation" className="hover:text-[#E91E63] transition text-[#E91E63]">Foundation</a>
              <a href="/team" className="hover:text-gray-400 transition">Team</a>
              <a href="/daily-barakah" className="hover:text-[#75C9B7] transition">Barakah</a>
            </div>
          </div>
          <div className="md:hidden border-t border-white/5 flex gap-6 px-6 py-3 overflow-x-auto no-scrollbar text-[9px] font-black uppercase tracking-widest whitespace-nowrap">
            <a href="/news" className="text-gray-400">News</a>
            <a href="/lab" className="text-gray-400">Lab</a>
            <a href="/jobs" className="text-gray-400">Jobs</a>
            <a href="/foundation" className="text-[#E91E63]">Foundation</a>
            <a href="/team" className="text-gray-400">Team</a>
            <a href="/daily-barakah" className="text-gray-400">Barakah</a>
          </div>
        </nav>

        {/* FLOATING CONTACT BUTTON */}
        <a 
          href="mailto:wondersightgallery@gmail.com" 
          className="fixed bottom-8 right-8 z-50 bg-[#FF5722] p-4 rounded-2xl shadow-2xl hover:scale-110 transition-transform flex items-center gap-3 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">
            Contact Us
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>

        <div className="min-h-screen">{children}</div>

        {/* FOOTER WITH SOCIAL LINKS */}
        <footer className="border-t border-white/10 py-16 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-[#FF5722] font-black mb-4 text-xs uppercase tracking-[0.2em]">Wonder Sight Group</p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                Applied research, digital infrastructure, and solution journalism for Northwestern Nigeria.
              </p>
            </div>

            {/* SOCIAL MEDIA HUB */}
            <div className="flex flex-col gap-4">
              <p className="text-white font-black text-[10px] uppercase tracking-widest">Connect With Us</p>
              <div className="flex flex-wrap gap-4 text-gray-500 text-[10px] font-bold uppercase tracking-tighter">
                <a href="https://x.com/WonderSight_G" target="_blank" className="hover:text-white transition">X (Twitter)</a>
                <a href="https://www.facebook.com/profile.php?id=100072479130782" target="_blank" className="hover:text-[#FF5722] transition">Facebook</a>
                <a href="https://www.instagram.com/wondersight_gallery" target="_blank" className="hover:text-[#E91E63] transition">Instagram</a>
                <a href="https://www.linkedin.com/company/wonder-sight-gallery" target="_blank" className="hover:text-white transition">LinkedIn</a>
                <a href="https://www.youtube.com/@wondersightgallery9756" target="_blank" className="hover:text-red-600 transition">YouTube</a>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <a href="/privacy" className="hover:text-white transition text-gray-500 text-[10px] uppercase font-bold tracking-widest">Privacy Policy</a>
              <div className="text-gray-500 text-[10px] uppercase tracking-tighter">
                © 2026 Wonder Sight. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}