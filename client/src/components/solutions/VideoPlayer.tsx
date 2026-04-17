import React from 'react';

export const VideoPlayer = ({ src, poster }: { src: string; poster?: string }) => {
  return (
    <div className="w-full bg-[#0A0D14] rounded-sm] overflow-hidden shadow-[0_40px_80px_-20px_rgba(var(--primary),0.2)] ring-1 ring-white/10 relative max-w-6xl mx-auto border border-white/5 transition-all duration-500 hover:shadow-[0_40px_100px_-20px_rgba(var(--primary),0.3)]">
      {/* Mock Browser Header */}
      <div className="h-12 bg-[#121620] border-b border-white/5 flex items-center px-6 gap-2 w-full justify-between">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-sm bg-red-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-sm bg-yellow-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-sm bg-green-500/80"></div>
        </div>
        {/* Fake URL Bar */}
        <div className="h-6 w-1/3 bg-white/5 rounded-sm flex items-center justify-center">
            <span className="text-[10px] text-white/30 tracking-widest uppercase">Technospyre Demo</span>
        </div>
        <div className="w-10"></div>
      </div>
      {/* Video Content */}
      <div className="relative">
        <video 
          src={src} 
          poster={poster}
          controls 
          className="w-full aspect-video md:aspect-[16/9] object-cover bg-black" 
          autoPlay 
          muted 
          loop
        />
      </div>
    </div>
  );
};
