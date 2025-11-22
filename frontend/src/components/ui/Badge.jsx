export function Badge({ children, className = "" }) {
  return <span className={`inline-block px-2 py-1 rounded-full text-xs bg-gold text-dark ${className}`}>{children}</span>;
}
