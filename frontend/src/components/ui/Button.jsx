const VARIANTS = {
  primary: 'bg-gold-500 text-navy-900 hover:bg-gold-400 border-transparent',
  outline: 'border border-white/20 text-white hover:bg-white/10',
  ghost: 'text-cream-200/70 hover:text-gold-400',
};

export default function Button({ variant = 'primary', children, className = '', ...props }) {
  return (
    <button className={`px-6 py-2.5 rounded-md text-sm font-medium uppercase tracking-wide transition-all ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}