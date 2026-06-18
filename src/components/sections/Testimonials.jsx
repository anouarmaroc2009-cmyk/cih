import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const TESTIMONIALS = [
  { name: 'Fatima Zohra', role: 'Entrepreneur, Casablanca', quote: 'CIH Bank transformed how I manage my business finances. The mobile app alone saves me hours every week.' },
  { name: 'Youssef El Amrani', role: 'Software Engineer, Rabat', quote: 'I switched from a European bank to CIH for their multi-currency accounts. Best decision I have made.' },
  { name: 'Leila Benjelloun', role: 'Doctor, Marrakech', quote: 'The premium card benefits are exceptional. Travel insurance and lounge access rival any international bank.' },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-navy-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs uppercase tracking-[0.35em] font-medium">Testimonials</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-display mt-4 mb-5 leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Trusted by{' '}
            <span className="text-gradient-gold italic">thousands</span>
          </h2>
          <div className="w-16 h-px bg-gold-500/40 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`relative p-8 bg-white rounded-xl border border-cream-200 transition-all duration-700 hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <svg className="w-8 h-8 text-gold-500/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-warmgray-500 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className="font-display text-navy-900 text-sm font-semibold">{t.name}</div>
                <div className="text-warmgray-400 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}