// src/pages/Companies.jsx
import React from "react";
import heroImg from "../assets/hero-reviews.jpg";
import Header from "../assets/components/header";
import Footer from "../assets/components/footer";

const Companies = () => {
  // Dummy company data
  const companies = [
    {
      id: 1,
      logo: "https://logo.clearbit.com/teleperformance.com",
      name: "TP",
      rating: "4.7",
      employees: "10000+ employees",
      location: "39 office locations",
      desc: "TP [Teleperformance] is a global leader in digital business services...",
      jobs: "3K",
      reviews: "88.6K",
      salaries: "12.6K",
    },
    {
      id: 2,
      logo: "https://logo.clearbit.com/google.com",
      name: "Google",
      rating: "4.4",
      employees: "10000+ employees",
      location: "Headquarters in Mountain View, United States",
      desc: "Since our founding in 1998, Google has grown by leaps and bounds...",
      jobs: "4.8K",
      reviews: "66.3K",
      salaries: "14.9K",
    },
    {
      id: 3,
      logo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      rating: "4.1",
      employees: "10000+ employees",
      location: "56 office locations",
      desc: "Microsoft is a technology leader providing software, hardware, and services...",
      jobs: "5.1K",
      reviews: "72K",
      salaries: "18K",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f9f7]">
      {/* ✅ Header at the top */}
      <Header />

      {/* Hero Section */}
      <section className="flex items-center justify-center px-10 py-16">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <div className="flex justify-center">
            <img
              src={heroImg}
              alt="Companies illustration"
              className="w-full max-w-md"
            />
          </div>

          {/* Right Section - Text + Buttons */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
              Find a workplace that works for you
              <span className="text-sm font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                New
              </span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Discover what an employer is really like before you make your next
              move. Search reviews and ratings, and filter companies based on
              the qualities that matter most to your job search.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Work/life balance
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Diversity and inclusion
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Compensation and benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Companies Section */}
      <section className="flex-grow bg-white px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Filters */}
          <aside className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Explore Companies</h3>
            <p className="text-gray-500 mb-6">Filter companies</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Select a company"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Select a location"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="E.g. healthcare, internet, education"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Select a job title"
                className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </aside>

          {/* Company List */}
          <div className="md:col-span-3 space-y-8">
            {/* Search Bar */}
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                placeholder="Search for a company"
                className="flex-grow px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-6 py-2 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                Search
              </button>
            </div>

            {/* Company Cards */}
            {companies.map((company) => (
              <div
                key={company.id}
                className="flex gap-6 border-b pb-6 last:border-b-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h4 className="text-lg font-bold flex items-center gap-2">
                    {company.name}
                    <span className="text-green-600 font-semibold text-sm">
                      {company.rating} ★
                    </span>
                  </h4>
                  <p className="text-gray-600">
                    {company.employees} •{" "}
                    <span className="text-green-600">{company.location}</span>
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">{company.desc}</p>
                  <div className="flex gap-4 mt-3 text-sm text-gray-600">
                    <span>{company.jobs} jobs</span>
                    <span className="text-green-600">
                      {company.reviews} reviews
                    </span>
                    <span className="text-green-600">
                      {company.salaries} salaries
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer Links Section */}
      <section className="bg-white px-10 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Top Companies Column */}
          <div>
            <h5 className="font-bold text-gray-900 mb-4">Top Companies</h5>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>
                <a href="#">Top Companies in Chennai Area</a>
              </li>
              <li>
                <a href="#">Top Companies in Mumbai Area</a>
              </li>
              <li>
                <a href="#">Top Companies in Pune Area</a>
              </li>
              <li>
                <a href="#">Top Companies in Hyderabad Area</a>
              </li>
              <li>
                <a href="#">Top Companies in New Delhi Area</a>
              </li>
            </ul>
            <button className="mt-2 text-sm text-gray-600 hover:underline">
              Show more ▼
            </button>
          </div>

          {/* Compare Companies Column */}
          <div>
            <h5 className="font-bold text-gray-900 mb-4">Compare Companies</h5>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>
                <a href="#">Compare working at Accenture vs Amazon</a>
              </li>
              <li>
                <a href="#">
                  Compare working at Accenture vs Cognizant Technology Solutions
                </a>
              </li>
              <li>
                <a href="#">Compare working at Accenture vs Genpact</a>
              </li>
              <li>
                <a href="#">Compare working at Accenture vs Infosys</a>
              </li>
              <li>
                <a href="#">Compare working at Accenture vs Mindtree</a>
              </li>
            </ul>
            <button className="mt-2 text-sm text-gray-600 hover:underline">
              Show more ▼
            </button>
          </div>

          {/* Company Q&A Column */}
          <div>
            <h5 className="font-bold text-gray-900 mb-4">Company Q&A</h5>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>
                <a href="#">Google Q&A’s</a>
              </li>
              <li>
                <a href="#">Facebook Q&A’s</a>
              </li>
              <li>
                <a href="#">Amazon Q&A’s</a>
              </li>
              <li>
                <a href="#">Netflix Q&A’s</a>
              </li>
              <li>
                <a href="#">Twitter Q&A’s</a>
              </li>
            </ul>
            <button className="mt-2 text-sm text-gray-600 hover:underline">
              Show more ▼
            </button>
          </div>

          {/* Getting Hired Column */}
          <div>
            <h5 className="font-bold text-gray-900 mb-4">Getting Hired</h5>
            <ul className="space-y-2 text-green-700 text-sm">
              <li>
                <a href="#">Cover Letter Opening Lines</a>
              </li>
            </ul>
            <button className="mt-2 text-sm text-gray-600 hover:underline">
              Show more ▼
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Companies;
