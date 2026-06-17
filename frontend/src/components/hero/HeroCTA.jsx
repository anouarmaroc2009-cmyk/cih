export default function HeroCTA() {
  return (
    <div className="relative z-10 flex flex-col sm:flex-row gap-4 animate-fade-in">
      <a href="#" className="px-8 py-3 bg-gold-500 text-navy-900 font-semibold rounded-md hover:bg-gold-400 transition-all text-center text-sm uppercase tracking-wide">
        Open an Account
      </a>
      <a href="#" className="px-8 py-3 border border-white/20 text-white rounded-md hover:bg-white/10 transition-all text-center text-sm uppercase tracking-wide">
        Discover More
      </a>
    </div>
  );
}