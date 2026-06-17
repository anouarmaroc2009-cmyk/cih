import useIntersectionObserver from '../../hooks/useIntersectionObserver';

export default function FeatureCard({ icon, title, description, index }) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`p-6 sm:p-8 border border-cream-300 bg-white/60 backdrop-blur-sm rounded-lg transition-all duration-700 hover:border-gold-500/40 hover:shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-navy-900 text-lg font-display font-semibold mb-2">{title}</h3>
      <p className="text-warmgray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}