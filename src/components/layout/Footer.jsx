export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-gold-500 text-lg font-display font-bold">CIH</span>
            <span className="text-white/50 text-xs ml-1">BANK</span>
            <p className="text-warmgray-400 text-sm mt-2 leading-relaxed">Avenue Hassan II 187, Casablanca 20000</p>
          </div>
          {[
            { title: 'Products', links: ['Accounts', 'Cards', 'Loans', 'Insurance'] },
            { title: 'Services', links: ['Mobile App', 'CIH Online', 'E-Shopping', 'CIH Pay'] },
            { title: 'Support', links: ['Contact Us', 'FAQs', 'Branches', 'Security'] },
          ].map((g) => (
            <div key={g.title}>
              <h4 className="text-cream-200 text-sm font-semibold uppercase tracking-wider mb-3">{g.title}</h4>
              <ul className="space-y-2">
                {g.links.map((l) => (
                  <li key={l}><a href="#" className="text-warmgray-400 hover:text-gold-400 text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warmgray-500 text-xs">&copy; {new Date().getFullYear()} CIH Bank. All rights reserved.</p>
          <div className="flex gap-4 text-warmgray-500 text-xs">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}