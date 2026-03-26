interface Props {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search users..."
      className="w-full md:w-96 px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );
}