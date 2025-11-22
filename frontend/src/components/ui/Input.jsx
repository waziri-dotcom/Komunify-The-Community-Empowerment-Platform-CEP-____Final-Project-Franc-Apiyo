export default function Input({ label, error, ...props }) {
  return (
    <label className="block">
      {label && <div className="text-sm font-medium mb-1">{label}</div>}
      <input className="w-full p-2 border rounded" {...props} />
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </label>
  );
}
