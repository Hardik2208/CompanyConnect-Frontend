import React, { useState } from "react";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer";
import bgImg from "../assets/internshipbg.jpg";
// --- Placeholder definitions to resolve compilation errors ---
// NOTE: Please replace these with your actual imports if they are external files.

// -------------------------------------------------------------

// --- Data for What's New Section ---
const newsCardsData = [
  {
    title: "How to Use a New Job Offer to Re-Negotiate Your Current Salary",
    description:
      "Should you decide that leveraging an external opportunity is the route you want to take, here are some 'Dos and Don'ts' to keep in mind when stepping into these kinds of negotiation talks.",
    imgUrl:
      "https://images.unsplash.com/photo-1549923758-a53239a58933?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    buttonText: "Read the Blog",
  },
  {
    title: "What to Do About a Pay Gap at Your Workplace",
    description:
      "Have you found out that you are earning a lower salary than someone who is a more recent hire, or has less experience than you? If so, it may be time to look for ways to do something about it.",
    imgUrl:
      "https://images.unsplash.com/photo-1544717297-fa95b4520a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    buttonText: "Read More",
  },
  {
    title: "5 Ways to Know If You're Making Less Than Your Coworkers",
    description:
      "Knowing where you stand in terms of compensation compared to your coworkers can help you understand your value to the company, whether or not it's time to ask for a raise, and if you should potentially be looking for a new gig.",
    imgUrl:
      "https://images.unsplash.com/photo-1542744173-0536d5402030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    buttonText: "Read the Blog",
  },
];

// --- Data for Salary Categories Section ---
const salaryCategoriesData = [
  {
    title: "Popular Salaries",
    links: [
      "Mechanical Engineer Salaries",
      "Assistant Professor Salaries",
      "Data Scientist Salaries",
      "Business Analyst Salaries",
      "Investment Banking Analyst Salaries",
    ],
  },
  {
    title: "Highest Salaries",
    links: [
      "Director Salaries",
      "Managing Director Salaries",
      "Vice President Salaries",
      "Trader Salaries",
      "Sales Director Salaries",
    ],
  },
  {
    title: "New Salaries",
    links: [
      "Recruitment Consultant Salaries",
      "Program Manager Salaries",
      "Private Banker Salaries",
      "Actuary Salaries",
      "Relationship Director Salaries",
    ],
  },
  {
    title: "Salary Advice",
    links: [
      "Salary Negotiation",
      "Asking for a Raise",
      "Top Paying Jobs",
      "Top Paying Companies",
      "Compare Your Salary",
    ],
  },
];

// --- Sub-component for What's New Section ---
const WhatIsNewSection = () => (
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        What's new at Interscope
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsCardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 transition-shadow hover:shadow-2xl"
          >
            <img
              src={card.imgUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/E5E7EB/4B5563?text=Placeholder+Image";
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <a
                href="#"
                className="inline-block bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-md"
              >
                {card.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- New Sub-component for Salary Categories ---
const SalaryCategoriesSection = () => (
  <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {salaryCategoriesData.map((category, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {category.title}
          </h3>
          {category.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href="#"
              className="text-gray-600 text-base hover:text-green-600 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
          <a href="#" className="text-green-600 font-bold mt-2 hover:underline">
            More
          </a>
        </div>
      ))}
    </div>
  </section>
);

// --- Main Page Component ---
const SearchSalariesCompensation = () => {
  const [activeTab, setActiveTab] = useState("Salaries");

  const tabs = ["Jobs", "Companies", "Salaries", "Interviews"];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Main Content: Hero Section */}
      <main
        className="relative flex-1 flex items-center justify-center pt-16 pb-24"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${bgImg})`, // ✅ use imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Centered Search Card */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6">
          <div className="p-8 rounded-xl backdrop-blur-sm">
            <h1 className="text-white text-4xl font-extrabold mb-6 text-center">
              Search Salaries and Compensation
            </h1>

            {/* Search Tabs with State and Active/Hover Styling */}
            <div className="flex justify-center gap-6 mb-6">
              {tabs.map((tab) => (
                <div key={tab} className="relative group">
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`text-lg font-bold pb-2 transition-colors duration-200 focus:outline-none 
                      ${
                        activeTab === tab
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {tab}
                  </button>
                  {/* Animated Active/Selected Underline */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full transition-transform duration-300 transform 
                    ${
                      activeTab === tab
                        ? "scale-x-100 bg-green-500"
                        : "scale-x-0 group-hover:scale-x-75 group-hover:bg-gray-400"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Search Bar (Integrated Style) */}
            <form className="flex w-full bg-white rounded-lg shadow-2xl overflow-hidden">
              <input
                type="text"
                placeholder="Your job title"
                className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-500 border-r border-gray-200"
              />
              <input
                type="text"
                placeholder="Location"
                className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 w-16 flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer-like notification bar (absolute within main) */}
        <div className="absolute bottom-0 w-full bg-yellow-100 text-yellow-800 text-center py-2 text-sm font-semibold border-t border-yellow-300">
          <p>
            <span className="font-bold">NEW!</span> Dive into anonymous, candid
            conversations with a community of professionals like you.{" "}
            <span className="underline cursor-pointer hover:text-yellow-900">
              Fishbowl by Interscope
            </span>
          </p>
        </div>
      </main>

      {/* What's New Section (Content below the Hero) */}
      <WhatIsNewSection />

      {/* Salary Categories Section (New Content) */}
      <SalaryCategoriesSection />

      <Footer />
    </div>
  );
};

export default SearchSalariesCompensation;
