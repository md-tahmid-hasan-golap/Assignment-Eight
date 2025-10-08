import React from "react";
import errorPageImage from "../../assets/error-404.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* 404 Section */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-6 py-16">
        {/* Image */}
        <img
          src={errorPageImage}
          alt="404 Error"
          className="w-72 sm:w-96 mb-8"
        />

        {/* Text */}
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops, page not found!
        </h2>
        <p className="text-gray-500 mb-8">
          The page you are looking for is not available or doesn’t exist.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          Go Back!
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ErrorPage;
