import React from "react";
import Banner from "../Banner/Banner";
import TrendingApps from "../TrendingApps/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const trendingAppData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <TrendingApps trendingAppData={trendingAppData}></TrendingApps>
    </div>
  );
};

export default Home;
