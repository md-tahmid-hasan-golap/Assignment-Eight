import React from "react";
import TrendingAppCard from "../TrendingAppCard/TrendingAppCard";
import { Link } from "react-router";

const TrendingApps = ({ trendingAppData }) => {
  console.log(trendingAppData);
  return (
    <div className="my-7">
      <h2 className="text-center font-bold text-5xl">Trending Apps</h2>
      <p className="text-center text-xl font-medium mt-3 text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* parent div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
        {trendingAppData.map((trendingApp) => (
          <TrendingAppCard
            key={trendingApp.id}
            trendingApp={trendingApp}
          ></TrendingAppCard>
        ))}
      </div>
      <Link to="/apps">
        <button className="mx-auto block px-6 py-3 mt-5 rounded-lg text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default TrendingApps;
