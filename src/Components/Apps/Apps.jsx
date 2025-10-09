import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import OurAllAppsCards from "../OurAllAppsCards/OurAllAppsCards";
import { AiOutlineSearch, AiOutlineLoading3Quarters } from "react-icons/ai";

const Apps = () => {
  const ourAllAppsData = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState(ourAllAppsData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      const filtered = ourAllAppsData.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredApps(filtered);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery, ourAllAppsData]);

  return (
    <div className="my-7">
      <h2 className="text-center font-bold text-5xl">Our All Applications</h2>
      <p className="text-center text-xl font-medium mt-3 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search & Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
        <h2 className="text-2xl font-bold">
          ({filteredApps.length}) Apps Found
        </h2>

        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm w-full sm:w-80">
          <AiOutlineSearch size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Apps"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-2 w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Loading / Results */}
      {loading ? (
        <div className="flex justify-center items-center mt-16">
          <AiOutlineLoading3Quarters
            size={40}
            className="text-purple-500 animate-spin"
          />
          <p className="ml-3 text-lg text-gray-500 font-medium">
            Searching apps...
          </p>
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
          {filteredApps.map((ourAllApp) => (
            <OurAllAppsCards key={ourAllApp.id} ourAllApp={ourAllApp} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No App Found 😕
        </p>
      )}
    </div>
  );
};

export default Apps;
