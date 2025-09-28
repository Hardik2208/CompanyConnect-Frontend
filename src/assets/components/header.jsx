import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const BenchSVG = () => (
  <svg width="120" height="70" viewBox="0 0 120 70" fill="none">
    <rect x="20" y="30" width="80" height="20" fill="#34d399" stroke="#222" strokeWidth="2" />
    <ellipse cx="100" cy="60" rx="16" ry="10" fill="#34d399" stroke="#222" />
    <rect x="30" y="35" width="60" height="5" fill="none" stroke="#222" strokeWidth="2" />
    <rect x="30" y="45" width="60" height="5" fill="none" stroke="#222" strokeWidth="2" />
  </svg>
);

const navItems = [
  { name: "Community", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Companies", path: "/companies" },
  { name: "Salaries", path: "/salaries" },
];

const popularSearches = [
  "Administrative Assistant jobs",
  "Customer Relations jobs",
  "Software Engineer jobs",
  "Accountant jobs",
  "Data Analyst jobs",
];

const Header = () => {
  const location = useLocation();
  const [showNotification, setShowNotification] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef();

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-white border-b border-gray-200 relative">
      {/* Logo */}
      <div className="text-2xl font-black tracking-tighter text-green-600 cursor-pointer hover:scale-105 transition-transform">
        'Internity'
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`text-md font-bold pb-4 relative transition-all duration-200
                        ${isActive ? "text-green-600" : "text-gray-800 group-hover:text-green-600"}`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-green-600 transition-all duration-300
                          ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Search Bar + Actions */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative" ref={searchRef}>
          <div
            className={`flex items-center border rounded-lg px-3 py-2 bg-white transition-shadow ${
              showSearchDropdown ? "shadow-lg" : ""
            }`}
            onClick={() => setShowSearchDropdown(true)}
          >
            <svg
              className="w-5 h-5 mr-2 text-gray-500 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-48 bg-transparent text-gray-700 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setShowSearchDropdown(true)}
            />
          </div>

          {/* Dropdown */}
          {showSearchDropdown && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50 transition-all duration-300 opacity-100 scale-100">
              <div className="px-4 pt-3 pb-2 font-semibold text-gray-800 text-sm">
                Popular Searches
              </div>
              {popularSearches.map((search) => (
                <button
                  key={search}
                  type="button"
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700 transition"
                  onClick={() => {
                    setSearchTerm(search);
                    setShowSearchDropdown(false);
                  }}
                >
                  {search}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notification Button */}
        <button
          className="text-gray-600 hover:text-green-600 transition-colors relative"
          onClick={() => setShowNotification(!showNotification)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:scale-110 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          {/* Notification Popup */}
          {showNotification && (
            <div className="absolute top-12 right-0 w-80 bg-white shadow-lg border border-gray-200 rounded-lg p-6 z-50">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Notifications</h3>
              <hr />
              <div className="text-center mt-8 mb-4">
                <div className="text-gray-700 font-semibold mb-1">No notifications</div>
                <div className="text-gray-500 text-sm mb-4">Enjoy a breather.</div>
                <div className="flex justify-center items-center">
                  <BenchSVG />
                </div>
              </div>
            </div>
          )}
        </button>

        {/* Login Link */}
        <Link
          to="/login"
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800 hover:scale-105 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span>Sign in/LogIn</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
