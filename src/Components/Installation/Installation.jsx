import { useState } from "react";
import { FaLeaf, FaDownload, FaStar } from "react-icons/fa";

export default function InstalledApps() {
  const [apps, setApps] = useState([
    {
      id: 1,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: 258,
    },
    {
      id: 2,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: 258,
    },
    {
      id: 3,
      name: "Forest: Focus For Productivity",
      downloads: "9M",
      rating: 5,
      size: 258,
    },
  ]);

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-base-100 shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-2 border-b pb-2">
          Your Installed Apps
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">{apps.length} Apps Found</h2>
          <select className="select select-bordered select-sm">
            <option>Sort By Size</option>
            <option>Sort By Name</option>
          </select>
        </div>

        <div className="space-y-3">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-base-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
                  <FaLeaf className="text-green-600 text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold">{app.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <FaDownload className="text-green-600" /> {app.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" /> {app.rating}
                    </div>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>
              <button className="btn btn-sm btn-success text-white">
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
