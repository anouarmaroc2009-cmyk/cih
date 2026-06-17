import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Individuals', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Cards', href: '#' },
  { label: 'Loans', href: '#' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy-900/80 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-gold-500 text-xl font-display font-bold tracking-wide">CIH</span>
          <span className="text-white/70 text-sm font-body hidden sm:inline">BANK</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-cream-200/70 hover:text-gold-400 transition-colors tracking-wide uppercase">{l.label}</a>
          ))}
          <a href="#" className="px-5 py-2 text-sm font-medium text-white bg-gold-600/90 hover:bg-gold-500 rounded-md transition-colors">Login</a>
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
        <div className="md:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="block text-cream-200/70 hover:text-gold-400 transition-colors text-sm uppercase tracking-wide">{l.label}</a>
            ))}
            <a href="#" className="block w-full text-center px-5 py-2 text-sm font-medium text-white bg-gold-600/90 hover:bg-gold-500 rounded-md transition-colors">Login</a>
          </div>
        </div>
      )}
    </header>
  );
}