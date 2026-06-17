export default function GlassPanel({ children, className = '' }) {
  return (
    <div className={`backdrop-blur-xl bg-white/10 border border-white/10 rounded-xl shadow-2xl ${className}`}>
      {children}
    </div>
  );
}