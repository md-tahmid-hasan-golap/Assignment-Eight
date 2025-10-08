import React from "react";

const TrendingApps = () => {
  return (
    <div className="my-7">
      <h2 className="text-center font-bold text-5xl">Trending Apps</h2>
      <p className="text-center text-xl font-medium mt-3 text-gray-400">
        Explore All Trending Apps on the Market developed by us
      </p>

      {/* parent div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"></div>
    </div>
  );
};

export default TrendingApps;
