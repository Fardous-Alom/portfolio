import React from "react";
import img1 from "../../assets/images/education/nitr.png";
import img2 from "../../assets/images/education/bmarpc.png";

function Education() {
  return (
    <div className="px-4 md:px-6 lg:px-10 py-5">
      <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
        Education
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <img src={img1} alt="" className="size-10 object-cover mb-2" />
          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            2019 - 2023
          </h3>
          <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            B.Tech in Electrical Engineering
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            NIT Rourkela | Odisha, India
          </p>
        </div>

        <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
          <img src={img2} alt="" className="size-10 object-cover mb-2" />
          <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
            2015 - 2017
          </h3>
          <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
            Higher Secondary School Certificate
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            B.M.A.R.P.C | Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
