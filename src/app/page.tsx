'use client';

import { useState } from 'react';
import websitesData from '@/data/websites.json';

interface Website {
  tld: string;
  title: string;
  description: string;
  url: string;
  color: string;
}

export default function Home() {
  const [flippedTile, setFlippedTile] = useState<number | null>(null);
  const [touchTimer, setTouchTimer] = useState<NodeJS.Timeout | null>(null);

  const handleTileClick = (index: number, website: Website) => {
    if (flippedTile === index && website.url) {
      window.open(website.url, '_blank');
    } else if (window.innerWidth <= 768) {
      // On mobile, first click flips, second click opens
      setFlippedTile(flippedTile === index ? null : index);
    }
  };

  const handleTileHover = (index: number) => {
    if (window.innerWidth > 768) {
      setFlippedTile(index);
    }
  };

  const handleTileLeave = () => {
    if (window.innerWidth > 768) {
      setFlippedTile(null);
    }
  };

  const handleTouchStart = (index: number) => {
    const timer = setTimeout(() => {
      setFlippedTile(flippedTile === index ? null : index);
    }, 500);
    setTouchTimer(timer);
  };

  const handleTouchEnd = () => {
    if (touchTimer) {
      clearTimeout(touchTimer);
      setTouchTimer(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Blue&apos;s Experiments
          </h1>
          
          {/* Social Icons */}
          <div className="flex justify-center mb-8">
            <a
              href="https://x.com/crestalblue_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 max-w-screen-2xl mx-auto">
          {websitesData.map((website: Website, index: number) => (
            <div
              key={website.tld}
              className="aspect-square relative cursor-pointer group min-w-[120px] min-h-[120px]"
              onClick={() => handleTileClick(index, website)}
              onMouseEnter={() => handleTileHover(index)}
              onMouseLeave={handleTileLeave}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
            >
              <div className={`w-full h-full relative preserve-3d transition-transform duration-500 ${flippedTile === index ? 'rotate-y-180' : ''}`}>
                {/* Front Face */}
                <div
                  className="absolute inset-0 w-full h-full rounded-xl flex items-center justify-center text-white font-bold text-xl md:text-2xl backface-hidden shadow-lg"
                  style={{ backgroundColor: website.color }}
                >
                  {website.tld}
                </div>
                
                {/* Back Face */}
                <div
                  className="absolute inset-0 w-full h-full rounded-xl text-white rotate-y-180 backface-hidden shadow-lg flex flex-col justify-center items-center text-center overflow-hidden"
                  style={{ backgroundColor: website.color }}
                >
                  {website.title ? (
                    <div className="px-4 py-4 w-full h-full flex flex-col justify-center space-y-2">
                      <h3 className="font-bold text-xs md:text-sm leading-tight line-clamp-2">
                        {website.title}
                      </h3>
                      <p className="text-[10px] md:text-xs opacity-90 leading-tight line-clamp-3">
                        {website.description}
                      </p>
                    </div>
                  ) : (
                    <div className="text-3xl md:text-4xl">🤔</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}