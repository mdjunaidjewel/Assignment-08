import React from "react";

const InstallCard = ({ app, onRemove }) => {
  return (
    <div className=" rounded-xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] p-4 sm:flex justify-between items-center my-6 ">
      <div className="sm:flex justify-between items-center gap-4">
        <img
          src={app.image}
          alt={app.title}
          className=" h-25 object-contain rounded-lg mb-3"
        />
        <div>
          <h2 className="text-lg font-bold">{app.title}</h2>
          <p className="text-sm text-gray-500">{app.companyName}</p>
        </div>
      </div>
      <div className="flex justify-between mt-3 items-center">
        <button
          onClick={()=>onRemove(app)}
          className="bg-gray-600 text-white text-sm px-5 py-3 rounded hover:bg-red-600 duration-200"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstallCard;
