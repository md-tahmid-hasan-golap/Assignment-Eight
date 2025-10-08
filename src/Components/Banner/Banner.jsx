import React from "react";

const Banner = () => {
  return (
    <div className="text-center my-10">
      <h1 className="text-6xl">
        We Build <br /> <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="py-4">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>

      <div className="flex gap-5 justify-center py-5">
        {/* Google Play Button */}
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-black border-[#e5e5e5] flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 512 512"
            className="fill-current"
          >
            <path d="M325.3 234.3L104.5 8.6C96.3 0.5 83.8-1.7 73.2 4.3 62.6 10.2 56 21.7 56 34.5v443c0 12.8 6.6 24.3 17.2 30.2 3.7 2.1 7.6 3.2 11.5 3.2 6.2 0 12.3-2.5 16.9-7l220.8-225.8-0.1-0.1zM432.1 229.8l-54.5-54.5-61.3 62 61.3 61.9 54.5-54.4zM367.9 282.2l-61.3 62-0.1-0.1 61.4-61.9z" />
          </svg>
          Google Play
        </a>

        {/* App Store Button */}
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-white text-black border-[#e5e5e5] flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 384 512"
            className="fill-current"
          >
            <path d="M318.7 268.1c.3 36.5 16.3 64.8 51.1 85.3-19.3 28.1-48.6 62.5-90.9 62.5-23.7 0-39.6-7.7-61.5-7.7s-38.8 7.7-62.1 7.7c-40.2 0-70.9-38-90.4-65.9C29.2 325.8 8 274.4 8 221.3c0-73.1 47.1-111.9 93.3-111.9 23.7 0 46 8.4 63.1 8.4 16.3 0 38.9-8.9 67.3-8.9 11.6 0 47.3 1.1 75.3 35.9-2 1.1-42.2 24.6-42 72.3zm-77.8-136.2c-11.7-13.9-31.7-24.6-51.1-24.6-2.6 0-7.7.3-10.9.9 0 0 7.4-23.7 24.3-40.2 11.6-11.7 31.2-20.3 46.9-20.3 2.3 0 7.1.3 10.4.9-.3 0-7.7 23.7-19.6 39.2-8.4 10.4-19 21.1-19 44.1z" />
          </svg>
          App Store
        </a>
      </div>
    </div>
  );
};

export default Banner;
