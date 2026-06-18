import { useState, useEffect } from 'react';
import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';
import HeroCTA from './HeroCTA';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative h-screen min-h-[650px] max-h-[950px] flex items-center overflow-hidden">
      <VideoBackground />

      <div className="absolute top-1/4 right-[10%] w-72 h-72 rounded-full bg-gold-500/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-navy-600/10 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 rounded-full bg-gold-400/5 blur-2xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <HeroContent />
        <HeroCTA />
      </div>

      {mounted && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-scroll-indicator">
          <span className="text-cream-200/40 text-xs uppercase tracking-[0.2em]">Scroll</span>
          <svg className="w-5 h-5 text-gold-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream-100 to-transparent z-10" />
    </section>
  );
}