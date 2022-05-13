import React from "react";

function WeatherLoading() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 w-full rounded-md">
        <div className="max-w-6xl mx-auto h-44 bg-gray-200 animate-pulse"></div>
        <div className="mt-8 h-32 max-w-6xl mx-auto space-y-3">
          <div className="w-20 h-6 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-full h-4 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-1/2 h-4 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherLoading;
