type SortKey = "" | "name" | "company";

interface Props {
  sortConfig: { key: SortKey; direction: "asc" | "desc" };
  setSortConfig: React.Dispatch<
    React.SetStateAction<{ key: SortKey; direction: "asc" | "desc" }>
  >;
}

export default function SortControl({ sortConfig, setSortConfig }: Props) {
  return (
    <div className="flex gap-2">
      <select
        value={sortConfig.key}
        onChange={(e) =>
          setSortConfig((prev) => ({
            ...prev,
            key: e.target.value as SortKey,
          }))
        }
        className="px-3 py-2 rounded-lg border shadow-sm bg-white"
      >
        <option value="">Sort</option>
        <option value="name">Name</option>
        <option value="company">Company</option>
      </select>

      <button
        onClick={() =>
          setSortConfig((prev) => ({
            ...prev,
            direction: prev.direction === "asc" ? "desc" : "asc",
          }))
        }
        className="px-3 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700"
      >
        {sortConfig.direction === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
}