import React from 'react';
import img from './logoo.svg';

const FestSponsorshipForm = () => {
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSdwOX7YZtjQ0p42UqsHDxn_znyy_CaLA0E2n1UYqB9EdjMxig/viewform?usp=dialog';

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 font-poppins">
      <div className="relative w-11/12 md:w-1/2">
        {/* Shadow Layer */}
        <div className="absolute inset-0 bg-blue-600 rounded-lg "></div>

        {/* Main Box */}
        <div className="relative flex flex-col items-center -translate-x-2 -translate-y-2 bg-white shadow-md rounded-lg p-8 transition-all duration-300 ease-in-out hover:shadow-xl border-2 border-blue-600">
          
          {/* Logo at the top right */}
          <img 
            src={img}  // Replace this with the actual path to your logo
            alt="Logo" 
            className="absolute top-2 right-2 w-10 h-10 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-12 lg:h-12" 
          />

          <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center transition duration-300 hover:text-blue-700">
            Sponsorship & Food Stalls for Your College Fest
          </h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center transition duration-300 hover:text-gray-800">
            Looking for sponsors or food stalls for your college fest? Fill out
            this form, and we’ll get in touch with you!
          </h2>
          <p className="text-gray-500 mb-8 text-center transition duration-300 hover:text-gray-600">
            Fill out the form and our team will get in touch with you to discuss
            the best options for your fest!
          </p>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-center hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default FestSponsorshipForm;
