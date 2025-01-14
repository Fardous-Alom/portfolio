import React from "react";

const DownloadResumeButton = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <a
        href="/public/Fardous_CV.pdf" // Path to your resume file in the public folder
        download="Fardous_CV.pdf" // Optional: Rename the file on download
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default DownloadResumeButton;
