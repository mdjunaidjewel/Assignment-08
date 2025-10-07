import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'

const AppDetails = () => {
    const { id } = useParams();
    const appsData = useLoaderData();
    const app = appsData.find(f => f.id === parseInt(id));
    const { title, companyName, ratingAvg, reviews, downloads, size, ratings } =
      app;
    return (
      <div>
        <div className="sm:flex sm:gap-10 items-center w-11/12 mx-auto bg-[#f5f5f5] mt-5 sm:mt-10 rounded-2xl p-5">
          <div className=" bg-blue-100 rounded-2xl">
            <img
              className=" w-72 sm:w-100 mb-5 sm:mb-0"
              src={app.image}
              alt=""
            />
          </div>
          <div>
            <div>
              <h1 className="sm:text-5xl font-semibold ">{title}</h1>
              <p className="sm:text-2xl py-3">
                {" "}
                Developed by{" "}
                <span className="text-blue-500 font-medium">{companyName}</span>
              </p>
            </div>
            <div>
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
            </div>
            <div>install area</div>
          </div>
        </div>
        
        <div>
            This is Graphs area
        </div>
      </div>
    );
};

export default AppDetails;