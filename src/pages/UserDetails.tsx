import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { User } from "../types/user";
import { getUsers } from "../services/api";

export default function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUsers().then((data) => {
      const found = data.find((u) => u.id === Number(id));
      setUser(found || null);
    });
  }, [id]);

  if (!user)
    return <p className="p-6 text-center text-gray-600 mt-50">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-10">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-100 px-4 py-2 rounded-xl cursor-pointer mb-4 text-sm text-blue-600 hover:bg-blue-500 hover:text-white hover:scale-[1.01] transition-all duration-300 ease-in-out"
        >
          ← Back
        </button>

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Top Banner */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-500" />

          {/* Profile Section */}
          <div className="p-6 -mt-16 flex flex-col md:flex-row gap-6">

            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl font-bold text-blue-600 border-4 border-white">
              {user.name.charAt(0)}
            </div>

            {/* Basic Info */}
            <div className="md:mt-10">
              <h2 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h2>
              <p className="text-gray-500">@{user.username}</p>
              <p className="text-blue-600 text-sm">{user.email}</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-2 gap-6 p-6">

            {/* Contact */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-gray-700">
                Contact
              </h3>
              <p className="text-sm text-gray-600">{user.phone}</p>
              <p className="text-sm text-gray-600">{user.website}</p>
            </div>

            {/* Address */}
            <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold mb-2 text-gray-700">
                Address
              </h3>
              <p className="text-sm text-gray-600">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm text-gray-600">
                {user.address.city} - {user.address.zipcode}
              </p>
            </div>

            {/* Company */}
            <div className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold mb-2 text-gray-800">
                Company
              </h3>
              <p className="font-medium text-gray-700">
                {user.company.name}
              </p>
              <p className="text-sm text-gray-600 italic">
                "{user.company.catchPhrase}"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {user.company.bs}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}