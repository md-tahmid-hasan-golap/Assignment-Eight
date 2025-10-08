import React from "react";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="text-center my-10">
      {/* Hero Title */}
      <h1 className="text-4xl md:text-6xl font-bold">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="py-4 max-w-2xl mx-auto text-sm md:text-base">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      {/* Buttons */}
      <div className="flex gap-5 justify-center py-5">
        {/* Google Play */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-black border-[#e5e5e5] flex items-center gap-2"
        >
          Google Play
        </a>
        {/* App Store */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-black border-[#e5e5e5] flex items-center gap-2"
        >
          App Store
        </a>
      </div>

      {/* Hero Image */}
      <div className="mt-8">
        <img
          src={hero}
          alt="Hero Banner"
          className="mx-auto w-full max-w-lg h-auto object-contain"
        />
      </div>

      {/* States Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg text-white text-center w-11/12 md:w-10/12 mx-auto p-9  shadow-xl relative z-10">
        <h2 className="text-2xl font-semibold mb-6">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 py-7">
          {/* first */}
          <div>
            <p>Total Downloads</p>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          {/* second */}
          <div>
            <p>Active Users</p>
            <h1 className="text-4xl font-bold">12.3M</h1>
            <p>15% growth this month</p>
          </div>
          {/* third */}
          <div>
            <p>5-Star Reviews</p>
            <h1 className="text-4xl font-bold">8.9M</h1>
            <p>10% more than last month</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
