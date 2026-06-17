import useCountUp from '../../hooks/useCountUp';

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration }) {
  const { count, ref } = useCountUp(target, duration);
  return <span ref={ref} className="tabular-nums">{prefix}{count.toLocaleString()}{suffix}</span>;
}