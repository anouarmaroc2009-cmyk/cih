import FeatureCard from './FeatureCard';

const FEATURES = [
  { icon: 'security', title: 'Bank-Grade Security', description: 'Multi-factor authentication, real-time fraud detection, and encrypted transactions you can trust.' },
  { icon: 'transfers', title: 'Instant Transfers', description: 'Send money to any Moroccan bank in seconds. No waiting, no hassle.' },
  { icon: 'mobile', title: 'Smart Mobile App', description: 'Face ID login, card management, and budgeting tools in one elegant interface.' },
  { icon: 'card', title: 'Premium Cards', description: 'Exclusive Mastercard World Elite with airport lounges, concierge, and cashback.' },
  { icon: 'globe', title: 'International Reach', description: 'Multi-currency accounts and borderless payments for the global Moroccan.' },
  { icon: 'insights', title: 'AI-Powered Insights', description: 'Smart spending analytics and savings recommendations tailored to your habits.' },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 sm:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-600 text-xs uppercase tracking-[0.35em] font-medium">Why CIH Bank</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-navy-900 font-display mt-4 mb-5 leading-tight">
            Built for <span className="text-gradient-gold italic">modern</span> Morocco
          </h2>
          <div className="w-16 h-px bg-gold-500/40 mx-auto mb-5" />
          <p className="text-warmgray-400 max-w-xl mx-auto text-base leading-relaxed">
            A century of trust, reimagined for the digital age.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}