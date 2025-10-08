import React, { useEffect, useState } from "react";
import InstallCard from "./InstallCard";
import Loading from "../../Components/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setTimeout(() => {
      setInstalledApps(apps);
      setLoading(false);
    }, 300);
  }, []);

  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.downloads.localeCompare(b.downloads);
    } else {
      return b.downloads.localeCompare(a.downloads);
    }
  });

  const handleRemove = (id, app) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast(`"${app.title}" Uninstalled Successfully!`);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen py-0 sm:py-8">
      <div className="w-11/12 mx-auto py-2 sm:py-10">
        {/*Header Section*/}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 underline">
            {installedApps.length} Apps Found
          </h2>

          {/* Sort Dropdown */}
          <div className="mt-4 sm:mt-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className=" font-semibold border-2 rounded-lg px-3 py-1 focus:outline-none focus:ring-1"
            >
            <option value="" className="text-gray-400">Sort By Size</option>
            <option className="sm:font-semibold" value="desc">High-Low</option>
              <option className="sm:font-semibold" value="asc">Low-High</option>
            </select>
          </div>
        </div>

        {/* App List Section */}
        {installedApps.length === 0 ? (
          <p className="text-gray-400 text-center text-2xl">
            No apps installed yet.
          </p>
        ) : (
          <div className="space-y-4 py-5 sm:py-10">
            {sortedApps.map((app) => (
              <InstallCard
                key={app.id}
                app={app}
                onRemove={() => handleRemove(app.id, app)}
              />
            ))}
          </div>
        )}
      </div>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Installation;
