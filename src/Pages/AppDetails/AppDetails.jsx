import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import download from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appsData = useLoaderData();
  const app = appsData.find((f) => f.id === parseInt(id));
  const { title, companyName, ratingAvg, reviews, downloads, ratings, size } =
    app;

  const [isInstalled, setIsInstalled] = useState(false);

  const handleInstall = () => {
    setIsInstalled(true);
  };

  return (
    <div>
      <div className="sm:flex sm:gap-10 items-center w-11/12 mx-auto bg-[#f5f5f5] mt-5 sm:mt-10 rounded-2xl p-5">
        <div className="bg-blue-100 rounded-2xl">
          <img
            className="w-72 sm:w-100 mb-5 sm:mb-0"
            src={app.image}
            alt={title}
          />
        </div>

        <div>
          <h1 className="sm:text-5xl font-semibold">{title}</h1>
          <p className="sm:text-2xl py-3">
            Developed by{" "}
            <span className="text-blue-500 font-medium">{companyName}</span>
          </p>

          <div className="sm:flex justify-baseline items-center sm:gap-10 sm:mt-10">
            <div>
              <img className="w-8 pb-2" src={download} alt="" />
              <h1 className="text-xl">Downloads</h1>
              <span className="font-bold text-3xl">{downloads}</span>
            </div>
            <div>
              <img className="w-8 pb-2" src={rating} alt="" />
              <h1 className="text-xl">Average Ratings</h1>
              <span className="font-bold text-3xl">{ratingAvg}</span>
            </div>
            <div>
              <img className="w-8 pb-2" src={review} alt="" />
              <h1 className="text-xl">Total Reviews</h1>
              <span className="font-bold text-3xl">{reviews}</span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleInstall}
              disabled={isInstalled}
              className={`btn btn-primary ${
                isInstalled ? "cursor-not-allowed bg-primary" : ""
              }`}
            >
              {isInstalled ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 w-11/12 mx-auto bg-white rounded-2xl p-5">
        <h2 className="text-2xl font-semibold mb-5">Ratings</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />

            <defs>
              <linearGradient id="yellowGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            <Bar
              dataKey="count"
              fill="url(#yellowGradient)"
              barSize={30}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AppDetails;
