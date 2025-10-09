import React, { useState, useEffect } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import AppsCard from "./AppsCard";
import Loading from "../../Components/Loading/Loading";
import noFound from '../../assets/App-Error.png'

const Apps = () => {
  const allApplications = useLoaderData();
  const [search, setSearch] = useState("");
  const [filterApps, setFilterApps] = useState(allApplications);
  const [loading, setLoading] = useState(true); 

  // Data load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterApps(allApplications);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [allApplications]);

  // Search handler
  const handleSearch = (value) => {
    setSearch(value);
    setLoading(true);

    setTimeout(() => {
      const filtered = allApplications.filter((app) =>
        app.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilterApps(filtered);
      setLoading(false);
    }, 300);
  };

  // Show all apps
  const showAllApps = () => {
    setSearch("");
    setFilterApps(allApplications);
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-4xl py-3 sm:pt-7">
        Our All Applications
      </h1>
      <p className="text-center text-gray-500">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search */}
      <div className=" space-y-2 sm:flex justify-between items-center w-11/12 mx-auto pt-4">
        <h2 className="font-bold">({filterApps.length}) Apps Found</h2>
        <div>
          <label className="input">
            <input
              type="search"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search"
            />
          </label>
        </div>
      </div>

      <div className="w-11/12 mx-auto sm:py-8 py-4 min-h-[300px] flex justify-center items-center">
        {loading ? (
          <Loading />
        ) : filterApps.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {filterApps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center p-8 mx-auto gap-6 bg-white rounded-2xl ">
            <img
              className="w-[180px] sm:w-[220px] opacity-90"
              src={noFound}
              alt="Not Found Illustration"
            />
            <div>
              <h1 className="text-2xl sm:text-3xl font-semibold text-red-700 mb-1">
                Oops! No Apps Found
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                The App you are requesting is not found on your system. Please try another Apps!
              </p>
            </div>
            <button
              onClick={showAllApps}
              className="mt-2 bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:scale-105 duration-200"
            >
              Go Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
