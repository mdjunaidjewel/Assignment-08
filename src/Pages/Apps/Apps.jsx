import React, { useState, useEffect } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import AppsCard from "./AppsCard";
import Loading from "../../Components/Loading/Loading";

const Apps = () => {
  const allApplications = useLoaderData();
  const [search, setSearch] = useState("");
  const [filterApps, setFilterApps] = useState(allApplications);
  const [loading, setLoading] = useState(true); // initially true for route load spinner

  // Data load effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilterApps(allApplications);
      setLoading(false); // data loaded => hide spinner
    }, 500);

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
    }, 700);
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
      <div className="flex justify-between items-center w-11/12 mx-auto pt-4">
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
              <AppsCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="col-span-full text-4xl text-center font-medium text-red-700">
            <h1>Sorry! No Apps Found.</h1>
            <button
              onClick={showAllApps}
              className="py-2 px-3.5 bg-blue-500 rounded-sm mt-5 text-white text-xl cursor-pointer hover:scale-105 duration-500"
            >
              Show All
            </button>
          </div>
        )}
      </div>

      {/* NavLink for route reload */}
      <div className="w-fit mx-auto flex justify-center items-center pb-10">
        <NavLink
          to="/Apps"
          className="py-2 px-3 rounded-sm text-white font-semibold hover:scale-105 duration-150"
          onClick={() => setLoading(true)} 
        >
        </NavLink>
      </div>
    </div>
  );
};

export default Apps;
