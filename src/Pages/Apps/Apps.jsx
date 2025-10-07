import React, { useState } from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
import AppsCard from './AppsCard';

const Apps = () => {
    const allApplications = useLoaderData()
    const [search, setSearch] = useState('');
    const filterApps = allApplications.filter(app => app.title.toLowerCase().includes(search.toLowerCase())
    );
    const showAllApps = () => {
      setSearch("");
    };
    return (
      <div>
        <h1 className="text-center font-semibold text-4xl py-3 sm:pt-7">
          Our All Applications
        </h1>
        <p className="text-center text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center w-11/12 mx-auto pt-4">
          <h2 className="font-bold">({filterApps.length}) Apps Found</h2>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto sm:py-8 py-4">
          {filterApps.length > 0 ? (
            filterApps.map((app) => <AppsCard key={app.id} app={app}></AppsCard>)
          ) : (
            <div className="col-span-full text-4xl text-center font-medium text-red-700">
              <h1>Sorry! No Apps Found.</h1>
              <button onClick={showAllApps} className="py-2 px-3.5 bg-blue-500 rounded-sm mt-5 text-white text-xl cursor-pointer hover:scale-105 duration-500">Show All</button>
            </div>
          )}
        </div>
      </div>
    );
};

export default Apps;