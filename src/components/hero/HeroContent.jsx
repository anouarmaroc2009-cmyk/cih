export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      <p className="text-gold-400 text-sm uppercase tracking-[0.3em] mb-4 animate-fade-in">
        CIH Bank — Est. 1920
      </p>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-display leading-tight mb-6 animate-slide-up">
        Banking that<br />
        <span className="text-gold-400 italic">elevates</span> your life
      </h1>
      <p className="text-cream-200/70 text-base sm:text-lg leading-relaxed max-w-lg animate-slide-up mb-8">
        From Casablanca to the world — premium financial services designed for modern Morocco. Secure, swift, and beautifully simple.
      </p>
    </div>
  );
}