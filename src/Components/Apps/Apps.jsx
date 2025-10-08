import React from "react";
import { useLoaderData } from "react-router";
import OurAllAppsCards from "../OurAllAppsCards/OurAllAppsCards";
import { AiOutlineSearch } from "react-icons/ai";

const Apps = () => {
  const ourAllAppsData = useLoaderData();

  return (
    <div className="my-7">
      <h2 className="text-center font-bold text-5xl">Our All Applications</h2>
      <p className="text-center text-xl font-medium mt-3 text-gray-400">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mt-7">
          ({ourAllAppsData.length}) Apps Found
        </h2>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm mt-4">
          <AiOutlineSearch size={20} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search Apps"
            className="ml-2 w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
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
