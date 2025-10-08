import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { AiOutlineDownload, AiFillStar } from "react-icons/ai";
import Swal from "sweetalert2"; // <--- SweetAlert2 import

const AppDetails = () => {
  const appDetails = useLoaderData();
  const { id } = useParams();

  const singleDetails = appDetails.find(
    (app) => parseInt(app.id) === parseInt(id)
  );

  const [installed, setInstalled] = useState(false);

  if (!singleDetails) {
    return <div className="p-6 text-red-500">App পাওয়া যায়নি!</div>;
  }

  const {
    title,
    image,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads,
    ratings,
  } = singleDetails;

  const handleInstall = () => {
    Swal.fire({
      icon: "success",
      title: "Installed!",
      text: `${title} has been installed successfully.`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
    setInstalled(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-7">
      <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-500 mb-4">
            by <strong>{companyName}</strong>
          </p>

          <div className="flex flex-wrap gap-6 mb-4">
            <div className="flex items-center gap-1 text-green-600">
              <AiOutlineDownload size={20} />
              <span>{downloads}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <span>{ratingAvg}</span>
              <AiFillStar size={20} />
            </div>
            <div>
              <strong>Reviews:</strong> {reviews}
            </div>
            <div>
              <strong>Size:</strong> {size}
            </div>
          </div>

          <button
            className={`px-4 py-2 font-semibold rounded text-white ${
              installed
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      <p className="text-gray-700 mb-6">{description}</p>

      <div>
        <h3 className="font-semibold mb-2">Ratings:</h3>
        {ratings.map((r, index) => {
          const count = parseInt(r.count.replace(/,/g, ""));
          const max = Math.max(
            ...ratings.map((r) => parseInt(r.count.replace(/,/g, "")))
          );
          const widthPercent = (count / max) * 100;

          return (
            <div key={index} className="flex items-center mb-1">
              <span className="w-16 text-sm">{r.name}</span>
              <div className="flex-1 h-4 bg-gray-200 rounded mx-2">
                <div
                  className="h-4 bg-orange-500 rounded"
                  style={{ width: `${widthPercent}%` }}
                ></div>
              </div>
              <span className="w-12 text-sm">{r.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppDetails;
