import React from "react";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";

const MainLayouts = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto min-h-[80vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
