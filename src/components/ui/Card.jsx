export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`bg-white/70 backdrop-blur-sm border border-cream-300 rounded-lg p-6 ${hover ? 'hover:border-gold-500/40 transition-all duration-300' : ''} ${className}`}>
      {children}
    </div>
  );
}