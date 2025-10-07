import React, { Suspense } from 'react';
import Home from '../Home/Home';

const LoadingData = () => {
    const allData = fetch('/FakeData.json').then(res => res.json())
    console.log(allData)
    return (
        <div>
                <div>
                    {
                        // <Home appsAllData={appsAllData}></Home>
                    }
                </div>
        </div>
    );
};

export default LoadingData;