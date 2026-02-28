'use client';
import React, { useState } from 'react';
import { urlFor } from '@/lib/sanity.client';

interface ArticleGalleryProps {
  images: any[];
}

export default function ArticleGallery({ images }: ArticleGalleryProps) {
  // Track which image is currently open in full-screen
  const [selectedImage, setSelectedImage] = useState<any | null>(null);

  if (!images || images.length === 0) return null;

  // Determine how many columns based on image count
  const gridCols = images.length === 1 ? 'grid-cols-1' : images.length === 2 ? 'grid-cols-2' : 'grid-cols-3';

  return (
    <section className="mb-16">
      {/* 1. THE GRID VIEW */}
      <div className={`grid gap-4 ${gridCols}`}>
        {images.map((img: any, i: number) => (
          <button
            key={i}
            onClick={() => setSelectedImage(img)} // Open full-screen on click
            className="rounded-2xl overflow-hidden border border-white/10 aspect-video relative group cursor-zoom-in active:scale-95 transition-transform"
          >
            <img 
              src={urlFor(img).width(600).height(400).url()} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              alt={img.alt || 'Gallery image'} 
            />
            
            {/* Hover Caption Overlay */}
            {img.caption && (
              <div className="absolute bottom-0 inset-x-0 p-3 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[9px] text-white font-bold uppercase tracking-widest text-center">{img.caption}</p>
              </div>
            )}
            
            {/* Click to Expand Label */}
            <div className="absolute top-4 right-4 text-xs bg-[#FF5722] text-white p-2 rounded-full font-black opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">
              View +
            </div>
          </button>
        ))}
      </div>

      {/* 2. THE FULL-SCREEN LIGHTBOX POPUP */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)} // Close on background click
        >
          {/* Backdrop Blur */}
          <div className="absolute inset-0 bg-[#120B21]/90 backdrop-blur-md"></div>
          
          {/* Main Content Area */}
          <div className="relative z-10 max-w-7xl max-h-[90vh] flex flex-col items-center animate-zoom-in">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white font-black text-2xl hover:text-[#75C9B7]"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            
            <img 
              src={urlFor(selectedImage).width(1600).url()} 
              alt={selectedImage.alt || 'Full-screen view'}
              className="rounded-3xl border-2 border-white/10 shadow-2xl max-h-[80vh] w-auto h-auto"
            />
            
            {selectedImage.caption && (
              <p className="mt-8 text-white font-medium text-lg leading-relaxed text-center px-10">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}