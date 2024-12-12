import React from 'react';
import img from './Untitled design (2).svg';

const FestSponsorshipForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdwOX7YZtjQ0p42UqsHDxn_znyy_CaLA0E2n1UYqB9EdjMxig/viewform?usp=dialog'; // Your Google Form link
  const doodleLogoUrl = img; // Path to the doodle logo image

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 font-poppins">
      <div className="relative flex flex-col items-center bg-white shadow-lg rounded-lg p-8 w-11/12 md:w-1/2 transition-all duration-300 ease-in-out hover:shadow-xl">
        {/* Doodle logo in the top-right corner */}
        <img 
          src={doodleLogoUrl} 
          alt="Doodle Logo" 
          className="absolute top-0 right-0 w-16 h-16 p-2"
        />
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center transition duration-300 hover:text-blue-700">
          Sponsorship & Food Stalls for Your College Fest
        </h1>
        <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center transition duration-300 hover:text-gray-800">
          Looking for sponsors or food stalls for your college fest?
          Fill out this form, and we’ll get in touch with you!  
        </h2>
        <p className="text-gray-500 mb-8 text-center transition duration-300 hover:text-gray-600">
          Fill out the form and our team will get in touch with you to discuss the best options for your fest!
        </p>

        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg text-center hover:bg-transparent hover:border-2 hover:border-black hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default FestSponsorshipForm;
