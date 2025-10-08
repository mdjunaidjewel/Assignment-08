import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  const appsData = useLoaderData();
  const app = appsData.find((f) => f.id === parseInt(id));
  const {
    title,
    companyName,
    ratingAvg,
    reviews,
    downloads,
    ratings,
    size,
    description,
  } = app;

  const [isInstalled, setIsInstalled] = useState(false);

  // Load installed apps from localStorage
  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.find((a) => a.id === app.id)) {
      setIsInstalled(true);
    }
  }, [app.id]);

  const handleInstall = (app) => {
    if (isInstalled) return;

    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    // check if app already exists
    if (!installedApps.find((a) => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setIsInstalled(true);
      toast(`Wow!! '${app.title}' Installed Successfully!`);
    }
  };

  return (
    <div>
      {/* -------- Header Section -------- */}
      <div className="sm:flex sm:gap-10 items-center w-11/12 mx-auto bg-[#f5f5f5] mt-5 sm:mt-10 rounded-lg p-5">
        <div className="bg-blue-100 rounded-2xl flex justify-center items-center p-5">
          <img
            className="w-40 sm:w-80 mb-5 sm:mb-0 object-contain rounded-br-4xl rounded-tl-4xl"
            src={app.image}
            alt={title}
          />
        </div>

        <div className="sm:flex-1">
          <h1 className="text-2xl sm:text-5xl font-semibold">{title}</h1>
          <p className="sm:text-2xl py-3">
            Developed by{" "}
            <span className="text-blue-500 font-medium">{companyName}</span>
          </p>
          <hr className="mt-5" />
          <div className="sm:flex justify-baseline items-center mt-4 sm:gap-10 sm:mt-10">
            <div className=" mb-4">
              <img className=" w-6 sm:w-8 pb-2" src={download} alt="" />
              <h1 className=" text-lg sm:text-xl">Downloads</h1>
              <span className="font-bold text-2xl sm:text-3xl">
                {downloads}
              </span>
            </div>
            <div className="mb-5">
              <img className="w-6 sm:w-8 pb-2" src={rating} alt="" />
              <h1 className="text-lg sm:text-xl">Average Ratings</h1>
              <span className="font-bold text-2xl sm:text-3xl">
                {ratingAvg}
              </span>
            </div>
            <div>
              <img className="w-8 pb-2" src={review} alt="" />
              <h1 className=" text-lg sm:text-xl">Total Reviews</h1>
              <span className="font-bold text-2xl sm:text-3xl">{reviews}</span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={() => handleInstall(app)}
              className={`btn btn-primary ${
                isInstalled ? "cursor-not-allowed" : ""
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Graph Section */}
      <div className="mt-10 sm:w-11/12 mx-auto bg-white rounded-2xl p-5">
        <h2 className=" text-2xl sm:text-3xl font-semibold sm:font-bold mb-5 text-center sm:text-left">
          Ratings
        </h2>

        <div className="w-full h-[250px] sm:h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[...ratings].reverse()} layout="vertical">
              <XAxis type="number" tick={{ fontSize: 10, fill: "#555" }} />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fontSize: 12, fill: "#333" }}
                width={70}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fef9c3",
                  borderRadius: "8px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <defs>
                <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>
              <Bar
                dataKey="count"
                fill="url(#yellowGradient)"
                barSize={25}
                animationDuration={800}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 sm:w-11/12 mx-auto border-t-1 p-5 text-gray-700">
        <h2 className="text-2xl sm:text-3xl font-semibold sm:font-bold mb-3 text-center sm:text-left">
          Description
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-justify">
          {description}
        </p>
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AppDetails;
