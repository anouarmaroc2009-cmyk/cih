import FeatureCard from './FeatureCard';

const FEATURES = [
  { icon: '\u{1F510}', title: 'Bank-Grade Security', description: 'Multi-factor authentication, real-time fraud detection, and encrypted transactions you can trust.' },
  { icon: '\u26A1', title: 'Instant Transfers', description: 'Send money to any Moroccan bank in seconds. No waiting, no hassle.' },
  { icon: '\u{1F4F1}', title: 'Smart Mobile App', description: 'Face ID login, card management, and budgeting tools in one elegant interface.' },
  { icon: '\u{1F4B3}', title: 'Premium Cards', description: 'Exclusive Mastercard World Elite with airport lounges, concierge, and cashback.' },
  { icon: '\u{1F30D}', title: 'International Reach', description: 'Multi-currency accounts and borderless payments for the global Moroccan.' },
  { icon: '\u{1F3AF}', title: 'AI-Powered Insights', description: 'Smart spending analytics and savings recommendations tailored to your habits.' },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 sm:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm uppercase tracking-[0.3em] mb-3">Why CIH Bank</p>
          <h2 className="text-3xl sm:text-4xl text-navy-900 font-display">
            Built for <span className="text-gold-500 italic">modern</span> Morocco
          </h2>
          <p className="text-warmgray-500 mt-4 max-w-lg mx-auto">A century of trust, reimagined for the digital age.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}