import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Individuals', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Cards', href: '#' },
  { label: 'Loans', href: '#' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-navy-900/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/5' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
            <span className="text-navy-900 text-xs font-bold">C</span>
          </div>
          <div>
            <span className="text-white text-lg font-display font-bold tracking-wide">CIH</span>
            <span className="text-cream-200/50 text-xs font-body ml-1.5 hidden sm:inline">BANK</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="relative text-sm text-cream-200/70 hover:text-gold-400 transition-colors tracking-wide uppercase after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full">
              {l.label}
            </a>
          ))}
          <a href="#" className="px-6 py-2.5 text-sm font-medium text-navy-900 bg-gold-500 hover:bg-gold-400 rounded-md transition-colors uppercase tracking-wider">
            Login
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-cream-200 p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 space-y-5">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="block text-cream-200/70 hover:text-gold-400 transition-colors text-sm uppercase tracking-wide">{l.label}</a>
            ))}
            <a href="#" className="block w-full text-center px-5 py-3 text-sm font-medium text-navy-900 bg-gold-500 hover:bg-gold-400 rounded-md transition-colors uppercase tracking-wider">Login</a>
          </div>
        </div>
      )}
    </header>
  );
}