import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlassdoorHeader = () => {
  const navLinks = [
    { name: 'Community', path: '/community' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Companies', path: '/companies' },
    { name: 'Salaries', path: '/salaries' },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-[#0c8d67]">GLASS</span>
              <span className="text-[#2d2d2d] font-normal">door</span>
            </Link>
          </div>

          {/* 2. Center Section: Main Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-gray-900 text-base font-semibold transition duration-150 ease-in-out"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 3. Right Section: Icons and Search */}
          <div className="flex items-center space-x-6">
            
            {/* Search Icon/Text Block */}
            <button
              aria-label="Search"
              className="flex items-center text-gray-700 hover:text-gray-900 transition duration-150 ease-in-out group"
            >
              <Search className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
              <span className="ml-2 text-base font-semibold hidden sm:inline">
                Search
              </span>
            </button>

            {/* Notification Bell Icon */}
            <button
              aria-label="Notifications"
              className="relative p-1 text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
            >
              <Bell className="h-6 w-6" />
            </button>

            {/* User Profile/Avatar Icon */}
            <button
              aria-label="Profile"
              className="relative p-1 text-gray-500 hover:text-gray-700 rounded-full transition duration-150 ease-in-out"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlassdoorHeader;