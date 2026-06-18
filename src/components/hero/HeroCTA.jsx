export default function HeroCTA() {
  return (
    <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-slide-up">
      <a
        href="#"
        className="group relative px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-md overflow-hidden transition-all text-center text-sm uppercase tracking-wider hover:bg-gold-400"
      >
        <span className="relative z-10">Open an Account</span>
      </a>
      <a
        href="#"
        className="group px-8 py-3.5 border border-white/15 text-cream-200 rounded-md hover:bg-white/5 transition-all text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2"
      >
        Discover More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}