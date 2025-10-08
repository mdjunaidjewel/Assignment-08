import React from 'react';

const Loading = () => {
    return (
      <div>
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-30 z-50">
          <span className="loading loading-spinner text-success"></span>
        </div>
      </div>
    );
};

export default Loading;