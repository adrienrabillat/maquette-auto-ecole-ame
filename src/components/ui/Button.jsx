import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5',
  secondary:
    'glass-badge text-white border border-white/15 hover:bg-white/15',
  outline:
    'bg-transparent text-primary border-2 border-border hover:border-primary hover:bg-primary/[0.04]',
  ghost:
    'bg-transparent text-primary hover:bg-primary/[0.06]',
};

/**
 * Reusable button component.
 *
 * Props:
 *   variant  — 'primary' | 'secondary' | 'outline' | 'ghost'
 *   to       — internal route (renders <Link>)
 *   href     — external URL (renders <a>)
 *   icon     — Lucide icon component (rendered at size 16 before children)
 *   iconRight— Lucide icon component (rendered at size 16 after children)
 *   className— extra classnames
 *   full     — full width
 */
export default function Button({
  variant = 'primary',
  to,
  href,
  icon: Icon,
  iconRight: IconRight,
  children,
  className = '',
  full = false,
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-heading font-semibold text-[15px]
    px-7 py-3.5 rounded-xl
    transition-all duration-300 ease-out
    cursor-pointer select-none
    min-h-[44px]
    ${full ? 'w-full' : ''}
    ${variants[variant] || variants.primary}
    ${className}
  `.trim();

  const inner = (
    <>
      {Icon && <Icon size={16} />}
      {children}
      {IconRight && <IconRight size={16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base} {...props}>
        {inner}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={base}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {inner}
    </button>
  );
}
