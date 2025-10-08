import React from "react";
import { useLoaderData } from "react-router";
import OurAllAppsCards from "../OurAllAppsCards/OurAllAppsCards";

const Apps = () => {
  const ourAllAppsData = useLoaderData();

  return (
    <div className="my-7">
      <h2 className="text-center font-bold text-5xl">Our All Applications</h2>
      <p className="text-center text-xl font-medium mt-3 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* parent div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-7">
        {ourAllAppsData.map((ourAllApp) => (
          <OurAllAppsCards
            key={ourAllApp.id}
            ourAllApp={ourAllApp}
          ></OurAllAppsCards>
        ))}
      </div>
    </div>
  );
};

export default Apps;
