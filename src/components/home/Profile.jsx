import React from "react";
import avatar from "/src/assets/images/home/fardous.png";

function Profile() {
  return (
    <div
      className="flex items-center gap-x-3 px-4 md:px-6 lg:px-10 py-5"
      id="home"
    >
      <div className="shrink-0">
        <img
          className="shrink-0 size-16 md:size-32  rounded-full"
          src={avatar}
          alt="Avatar"
        />
      </div>

      <div className="grow">
        <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Fardous Alom
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Frontend Developer | React & Next.js Specialist
        </p>
      </div>
    </div>
  );
}

export default Profile;
