import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonder Sight Media & Foundation",
  description: "Digital Solutions and Solution Journalism for Northern Nigeria",
  // GOOGLE ADSENSE VERIFICATION META TAG
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
        {/* Keep the script as well for actual ad delivery */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9706843263138053"
          crossOrigin="anonymous"
          strategy="afterInteractive" 
        />
      </head>
      <body className={`${inter.className} bg-[#120B21] text-white antialiased`}>
        <nav className="sticky top-0 z-50 bg-[#120B21]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <a href="/" className="text-xl font-black bg-gradient-to-r from-[#E91E63] to-[#FF5722] bg-clip-text text-transparent">
              WONDER SIGHT
            </a>
            <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="/news" className="hover:text-[#FF5722] transition">News</a>
              <a href="/lab" className="hover:text-[#75C9B7] transition">Innovation Lab</a> {/* Updated */}
              <a href="/jobs" className="hover:text-[#FF5722] transition">Jobs</a>
              <a href="/foundation" className="hover:text-[#E91E63] transition text-[#E91E63]">Foundation</a>
              <a href="/team" className="hover:text-gray-400 transition">Team</a>
              <a href="/daily-barakah" className="hover:text-[#75C9B7] transition">Daily Barakah</a>
            </div>
          </div>
        </nav>

        <div className="min-h-screen">{children}</div>

        <footer className="border-t border-white/10 py-10 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-[#FF5722] font-bold mb-2">Wonder Sight Media</p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-sm">
                Documenting solutions and building digital infrastructure for the Sahel. Nigeria.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/privacy" className="hover:text-white transition text-gray-500 text-xs">Privacy Policy</a>
              <div className="text-gray-500 text-[10px] uppercase tracking-tighter self-end md:self-start">
                © 2026 Wonder Sight. All Rights Reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}