import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-700">
      {/* Animated text */}
      <h2 className="text-white text-3xl font-bold mb-8 tracking-wide animate-pulse">
        HERO.IO is Loading...
      </h2>

      {/* Three spinning rings */}
      <div className="flex space-x-4">
        <span className="loading loading-ring loading-xl text-white"></span>
        <span className="loading loading-ring loading-xl text-blue-200"></span>
        <span className="loading loading-ring loading-xl text-blue-400"></span>
      </div>

      {/* Optional small fade-in text */}
      <p className="text-white mt-6 opacity-70 animate-pulse">
        Please wait a moment
      </p>
    </div>
  );
};

export default LoadingSpinner;
