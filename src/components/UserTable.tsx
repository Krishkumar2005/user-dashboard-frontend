import type { User } from "../types/user";
import { useNavigate } from "react-router-dom";

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const navigate = useNavigate();
  
 

  return (
    <div className="mt-6">
      {/* Desktop */}
      <div className="hidden md:block bg-white rounded-2xl shadow-xl border overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Company</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                className="border-t hover:bg-blue-50 cursor-pointer transition-all hover:scale-[1.01]"
              >
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4 text-gray-600">{user.email}</td>
                <td className="p-4 text-gray-600">{user.phone}</td>
                <td className="p-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {user.company.name}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => navigate(`/user/${user.id}`)}
            className="p-4 bg-white rounded-2xl shadow-lg border hover:shadow-xl cursor-pointer"
          >
            <h3 className="font-semibold text-lg text-gray-800">
              {user.name}
            </h3>
            <p className="text-blue-600 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm">{user.phone}</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full mt-2 inline-block">
              {user.company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}