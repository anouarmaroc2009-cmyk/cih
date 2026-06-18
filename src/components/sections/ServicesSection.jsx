import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SERVICES = [
  {
    title: 'Current Accounts',
    desc: 'Premium checking accounts with no monthly fees, free international transfers, and a dedicated relationship manager.',
    icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  },
  {
    title: 'Savings & Investments',
    desc: 'High-yield savings accounts, mutual funds, and Sharia-compliant investment options with expert guidance.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
  {
    title: 'Mortgage & Housing',
    desc: 'Competitive home financing solutions with fixed rates, fast approvals, and personalized repayment plans.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  },
  {
    title: 'Business Banking',
    desc: 'Tailored solutions for Moroccan enterprises: working capital, trade finance, payroll, and digital treasury.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    title: 'Cards & Payments',
    desc: 'Mastercard World Elite, contactless payments, Apple Pay, and exclusive merchant discounts across Morocco.',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  },
  {
    title: 'Digital Banking',
    desc: 'Full-featured mobile app with AI-powered budgeting, instant card freeze, and biometric authentication.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs uppercase tracking-[0.35em] font-medium">Our Products</span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-display mt-4 mb-5 leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Everything you need,{' '}
            <span className="text-gradient-gold italic">nothing you don&apos;t</span>
          </h2>
          <div className="w-16 h-px bg-gold-500/40 mx-auto" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`group p-8 rounded-xl border border-cream-200 bg-cream-50/50 hover:bg-white hover:border-gold-500/30 hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-navy-900/5 flex items-center justify-center mb-5 group-hover:bg-navy-900 transition-colors duration-500">
                <svg className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <h3 className="text-navy-900 text-lg font-display font-semibold mb-3">{s.title}</h3>
              <p className="text-warmgray-400 text-sm leading-relaxed">{s.desc}</p>
              <a href="#" className="inline-flex items-center gap-1.5 mt-4 text-gold-600 text-xs uppercase tracking-wider font-medium hover:text-gold-500 transition-colors group/link">
                Learn more
                <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}