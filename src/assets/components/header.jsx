// src/components/Header.jsx
import React, { useState } from 'react';

// 1. Data for our navigation items and their hover content
const navItems = [
  { name: 'Community', content: 'Connect anonymously with professionals about work, pay, life and more.' },
  { name: 'Jobs', content: 'Find the right job. Millions of jobs. Search by what matters to you.' },
  { name: 'Companies', content: 'Read reviews and see what it’s like to work at a company.' },
  { name: 'Salaries', content: 'Compare salaries and see what you could be earning.' },
  { name: 'For employers', content: 'Talk to sales. Learn more about an Enhanced Profile.' },
];

const Header = () => {
  // 2. State to track the currently hovered navigation item
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-white border-b border-gray-200">
      
      {/* Left Section: Logo */}
      <div className="text-2xl font-black tracking-tighter text-green-600">
        'GLASSDOOR'
      </div>

      {/* Middle Section: Navigation */}
      <nav>
        <ul className="flex items-center  gap-10">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative" // Parent needs to be relative for absolute child positioning
              onMouseEnter={() => setHoveredItem(item.name)} // 3. Set state on hover
              onMouseLeave={() => setHoveredItem(null)}     //    Reset state on leave
            >
              <a href="#" className="text-md font-bold text-gray-800 transition-colors duration-200 hover:text-green-600 pb-4">
                {item.name}
              </a>

              {/* 4. Conditionally rendered dropdown panel */}
              {hoveredItem === item.name && (
                <div className="absolute top-full mt-2 w-72 p-5 bg-white border border-gray-200 rounded-lg shadow-xl z-10">
                  <p className="text-gray-700">{item.content}</p>
                  {/* <button className="mt-4 px-4 py-2 text-sm font-bold text-white bg-green-600 rounded-full hover:bg-green-700">
                    Start using Glassdoor
                  </button> */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right Section: Actions (No changes here) */}
      <div className="flex items-center gap-5">
        <button className="text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-black rounded-lg hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span>Sign in</span>
        </button>
      </div>

    </header>
  );
};

export default Header;