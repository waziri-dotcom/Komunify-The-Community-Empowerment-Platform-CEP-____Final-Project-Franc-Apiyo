export function Avatar({ src, name }) {
  return <img className="w-10 h-10 rounded-full object-cover" src={src || '/avatar-placeholder.png'} alt={name} />;
}
