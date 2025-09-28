// src/Pages/Jobs.jsx
import React from "react";
import { Search } from "lucide-react";
import birdwatcher from "../assets/birdwatcher.jpg"; 
 import Header from "../assets/components/header";
 import Footer from "../assets/components/footer";// ✅ import if inside src/assets
function Jobs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Two-column layout */}
      <Header/>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 md:px-16 py-16">
        
        {/* Left side - text & search */}
        <div className="text-center md:text-left flex flex-col justify-center">
          {/* Upload CV link */}
          <p className="text-sm text-green-600 font-medium flex items-center justify-center md:justify-start gap-1">
            <span className="text-green-600">⚡</span>
            Upload your CV - let employers find you
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mt-4">
            Your job search starts here
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Find the role that’s right for you.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row items-center gap-2 mt-6 w-full">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Find your perfect job"
                className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder='City, state, zipcode or "remote"'
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Trending */}
          <button className="mt-10 text-green-600 font-medium hover:underline">
            See what’s trending on Internity ⌄
          </button>
        </div>

        {/* Right side - image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={birdwatcher}
            alt="Job search illustration"
            className="w-72 md:w-96 h-auto"
          />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Jobs;
