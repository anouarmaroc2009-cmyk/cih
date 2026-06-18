export default function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gold-400/5 blur-3xl animate-float-delayed" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-gold-400 text-xs uppercase tracking-[0.35em] font-medium">Get Started</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-display mt-4 mb-6 leading-tight">
          Your financial future begins{' '}
          <span className="text-gradient-gold italic">today</span>
        </h2>
        <p className="text-cream-200/50 max-w-xl mx-auto text-base leading-relaxed mb-10">
          Open your account in minutes with just a scan, a selfie, and a signature.
          No paperwork, no branches, no waiting.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="px-8 py-3.5 bg-gold-500 text-navy-900 font-semibold rounded-md hover:bg-gold-400 transition-all text-sm uppercase tracking-wider">
            Open Your Account
          </a>
          <a href="#" className="px-8 py-3.5 border border-white/15 text-cream-200 rounded-md hover:bg-white/5 transition-all text-sm uppercase tracking-wider">
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}