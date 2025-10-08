import React, { useState, useEffect } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import HomeCard from "./HomeCard";
import Loading from "../../Components/Loading/Loading";
import google from "../../assets/google.png";
import app from "../../assets/app.png";
import banner from "../../assets/hero.png";

const Home = () => {
  const allApplications = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // spinner show 0.8 sec
    return () => clearTimeout(timer);
  }, [allApplications]);

  if (loading) return <Loading />; // spinner show

  return (
    <div>
      {/* Hero Section */}
      <div className="pt-10 px-5 flex justify-center items-center flex-col gap-y-10">
        <div className="flex justify-center items-center flex-col text-center space-y-4">
          <h1 className="text-2xl sm:text-4xl font-semibold">
            We Build <br />
            <span className="font-bold text-blue-600">Productive</span> Apps
          </h1>
          <p className="w-8/12 mx-auto text-[#627382] mb-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center border border-gray-400 p-3 rounded-md font-semibold duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <img
                className="inline w-5 h-5 mr-3"
                src={google}
                alt="Google Play logo"
              />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="w-full sm:w-auto flex items-center justify-center border border-gray-400 p-3 rounded-md font-semibold duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <img
                className="inline w-5 h-5 mr-3"
                src={app}
                alt="App Store logo"
              />
              App Store
            </a>
          </div>
        </div>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] w-full text-white p-5 sm:p-8 md:p-10 lg:p-14 flex flex-col items-center h-auto justify-center sm:min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Trusted By Millions, Built For You
        </h1>
        <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16 text-center">
          <div>
            <h2 className="text-sm uppercase tracking-wide opacity-75 mb-2">
              Total Downloads
            </h2>
            <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2">
              29.6M
            </p>
            <p className="text-sm opacity-75">21% More Than Last Month</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wide opacity-75 mb-2">
              Total Reviews
            </h2>
            <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2">
              906K
            </p>
            <p className="text-sm opacity-75">46% More Than Last Month</p>
          </div>
          <div>
            <h2 className="text-sm uppercase tracking-wide opacity-75 mb-2">
              Active Apps
            </h2>
            <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2">
              132+
            </p>
            <p className="text-sm opacity-75">31 More Will Launch</p>
          </div>
        </div>
      </div>

      {/* Trending Apps Section */}
      <div>
        <h1 className="text-center text-4xl pt-3 sm:pt-7 font-semibold">
          Trending Apps
        </h1>
        <p className="text-center py-3">
          Explore All Trending Apps on the Market developed by us.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto sm:py-8 py-4">
          {allApplications.slice(0, 8).map((app) => (
            <HomeCard key={app.id} app={app} />
          ))}
        </div>
        <div className="w-fit mx-auto flex justify-center items-center pb-3 sm:pb-10 text-white font-semibold hover:scale-105 duration-150">
          <button className="py-2 px-3.5 bg-blue-500 rounded-sm">
            <NavLink to="/Apps">Show All</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
