import React from 'react';

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="mb-4 grid grid-rows-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-700 font-medium">{label}</span>
        <span className={`font-semibold`}>{percentage}%</span>
      </div>
      <div className=" w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
