import React from "react";
import { AiOutlineDownload, AiFillStar } from "react-icons/ai";
import { Link } from "react-router";

const OurAllAppsCards = ({ ourAllApp }) => {
  const { id, image, title, downloads, ratingAvg } = ourAllApp;

  return (
    <Link to={`/appDetails/${id}`}>
      {" "}
      <div className="card bg-base-100 shadow-sm w-72">
        {/* Image at the top */}
        <figure>
          <img src={image} alt={title} className="w-full h-40 object-cover" />
        </figure>

        {/* Body */}
        <div className="card-body p-4">
          {/* Title */}
          <h2 className="card-title text-lg font-semibold">{title}</h2>

          {/* Bottom row: Downloads left, Rating right */}
          <div className="flex justify-between items-center mt-3">
            {/* Downloads */}
            <div className="flex items-center gap-1 text-green-500">
              <AiOutlineDownload size={20} />
              <span>{downloads}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 text-amber-500">
              <span>{ratingAvg}</span>
              <AiFillStar size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default OurAllAppsCards;
