import React from "react";
import rating from '../../assets/icon-ratings.png'
import appDownload from '../../assets/icon-downloads.png'

const InstallCard = ({ app, onRemove }) => {
  return (
    <div className=" rounded-xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] p-4 sm:flex justify-between items-center my-6">
      <div className="sm:flex justify-between items-center gap-4">
        <div>
          <img
            src={app.image}
            alt={app.title}
            className=" h-25 object-contain rounded-lg mb-3"
          />
        </div>
        <div>
          <h2 className="text-lg font-bold">{app.title}</h2>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-lg font-semibold text-gray-500 flex justify-between items-center gap-1">
              <img className="w-5" src={appDownload} alt="" />
              {app.downloads}
            </p>
            <p className="text-lg font-semibold flex justify-between items-center gap-1">
              <img className="w-5" src={rating} alt="" />
              {app.ratingAvg}
            </p>
            <p className="text-lg font-semibold">{app.size} MB</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <button
          onClick={() => onRemove(app)}
          className="bg-gray-600 text-white text-sm px-5 py-3 rounded hover:bg-red-700 duration-200 cursor-pointer font-medium" 
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
