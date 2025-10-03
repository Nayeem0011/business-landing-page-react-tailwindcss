import React from "react";

const CompanyLogo = () => {
  return (
    <div>
      <div className="w-full container mx-auto py-20 overflow-hidden flex flex-col sm:flex-row sm:items-center items-start">
        <div className="w-[300px] shrink-0 px-8 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold sm:text-left  mb-8 sm:mb-0">
          Proud partner at <br /> Hubspot & Segment
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
