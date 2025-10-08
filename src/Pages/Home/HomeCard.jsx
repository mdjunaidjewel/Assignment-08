import React from 'react';
import star from '../../assets/icon-ratings.png'
import download from '../../assets/icon-downloads.png'
import { NavLink } from 'react-router-dom';
const HomeCard = ({ app }) => {
    const { image, title, downloads, ratingAvg,id } = app;
    return (
      <NavLink to={`/appDetails/${id}`}>
        <div className="hover:scale-105 duration-150">
          <div className="card bg-base-100 shadow-sm h-fit mx-auto cursor-pointer">
            <figure>
              <img
                className=" w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
                src={image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <div className="card-actions justify-between mt-3">
                <div className="badge bg-[#f1f5e9] font-semibold">
                  <img className="w-3" src={download} alt="" />
                  {downloads}
                </div>
                <div className="badge bg-[#f1f5e9] font-semibold text-[#ff8912e5]">
                  <img className="w-3" src={star} alt="" />
                  {ratingAvg}
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
};

export default HomeCard;