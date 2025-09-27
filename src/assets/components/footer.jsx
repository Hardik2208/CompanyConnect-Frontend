import React from "react";
import { ChevronDown } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Glassdoor",
      links: ["About / Press", "Blog", "Contact Us", "Grievance Officer - India"],
    },
    {
      title: "Employers",
      links: ["Get a FREE Employer Account", "Employer Centre"],
    },
    {
      title: "Information",
      links: [
        "Help",
        "Guidelines",
        "Terms of Use",
        "Privacy and Ad Choices",
        "Do Not Sell Or Share My Information",
        "Cookie Consent Tool",
      ],
    },
    {
      title: "Work With Us",
      links: ["Advertise", "Career Partners"],
    },
  ];

  const socialIcons = [
    { icon: "f", href: "#" },
    { icon: "x", href: "#" },
    { icon: "y", href: "#" },
    { icon: "i", href: "#" },
    { icon: "t", href: "#" },
  ];

  const LinkItem = ({ text }) => (
    <a
      href="#"
      className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200 block py-1.5"
    >
      {text}
    </a>
  );

  return (
    <footer className="relative mt-16 backdrop-blur-xl bg-white/70 border-t border-white/40 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12 pb-8">
          {/* Logo */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <span className="text-3xl font-extrabold text-green-600 tracking-tight">
              Glassdoor
            </span>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 flex-1">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  {section.title}
                </h4>
                <nav className="space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <LinkItem key={linkIndex} text={link} />
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/40 pt-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Download App */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700 font-medium">
              Download the App
            </span>
            <div className="flex gap-3 text-2xl">
              <span className="text-gray-800 hover:text-green-600 transition-transform transform hover:scale-110 cursor-pointer">
                
              </span>
              <span className="text-gray-800 hover:text-green-600 transition-transform transform hover:scale-110 cursor-pointer">
                🤖
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialIcons.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="w-9 h-9 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center text-gray-700 font-bold text-sm uppercase shadow-sm hover:bg-white hover:border-gray-300 hover:scale-110 transition-all duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Country Selector */}
          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-36 py-2 px-4 border border-white/60 bg-white/50 backdrop-blur-lg rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-white hover:border-gray-300 transition-all duration-200 flex items-center justify-between">
              India
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
