import { useEffect, useState } from "react";
import type { User } from "../types/user";
import { getUsers } from "../services/api";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import SortControl from "../components/SortControl";

type SortKey = "" | "name" | "company";

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: "asc" | "desc";
  }>({ key: "", direction: "asc" });

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filtered = users.filter((u) =>
    `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const valA =
      sortConfig.key === "company" ? a.company.name : a.name;
    const valB =
      sortConfig.key === "company" ? b.company.name : b.name;

    if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 md:px-10 py-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            User Directory
          </h1>

          <div className="flex gap-3 flex-wrap">
            <SearchBar value={search} onChange={setSearch} />
            <SortControl
              sortConfig={sortConfig}
              setSortConfig={setSortConfig}
            />
          </div>
        </div>

        <UserTable users={sorted} />
      </div>
    </div>
  );
}