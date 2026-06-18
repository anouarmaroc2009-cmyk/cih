import useIntersectionObserver from '../../hooks/useIntersectionObserver';

function StatItem({ value, label, suffix }) {
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-display text-white font-bold mb-1">
        {value}{suffix && <span className="text-gold-400">{suffix}</span>}
      </div>
      <div className="text-cream-200/50 text-sm uppercase tracking-[0.15em]">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="relative bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-y border-white/5">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.04) 0%, transparent 50%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <StatItem value="100" suffix="+" label="Years of Trust" />
          <StatItem value="2M" suffix="+" label="Active Clients" />
          <StatItem value="300" suffix="+" label="Branches Nationwide" />
          <StatItem value="50M" suffix="+" label="Transactions / Year" />
        </div>
      </div>
    </section>
  );
}