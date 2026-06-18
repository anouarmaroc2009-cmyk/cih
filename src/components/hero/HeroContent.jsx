export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      <div className="flex items-center gap-4 mb-6 animate-fade-in">
        <div className="h-px w-12 bg-gold-500/60" />
        <span className="text-gold-400 text-xs uppercase tracking-[0.35em] font-medium">CIH Bank — Est. 1920</span>
      </div>

      <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-display leading-[1.1] mb-6">
        Banking that{' '}
        <span className="text-gradient-gold italic">elevates</span>
        <br />
        your life
      </h1>

      <p className="text-cream-200/60 text-base sm:text-lg leading-relaxed max-w-xl mb-10">
        From Casablanca to the world — premium financial services designed for
        modern Morocco. Secure, swift, and beautifully simple.
      </p>
    </div>
  );
}