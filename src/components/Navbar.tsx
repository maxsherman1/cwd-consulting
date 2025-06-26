"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
    setTimeoutId(id);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/research", label: "Research" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const servicesDropdown = [
    { href: "/services/investment", label: "Investment Services" },
    { href: "/services/governance", label: "Product Governance" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/cwd_logo.png"
            alt="CWD Consulting Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-[var(--primary-teal)] font-sans">
            CWD Consulting
          </span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium relative ${
                      pathname === link.href || isServicesOpen
                        ? "text-[var(--primary-teal)] after:w-full after:left-0"
                        : "text-gray-600 hover:text-[var(--primary-teal)] after:w-0 after:left-0 hover:after:w-full"
                    } transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:h-[2px] after:bg-[var(--primary-teal)] after:transition-all after:duration-300`}
                  >
                    {link.label}
                  </Link>
                  {isServicesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {servicesDropdown.map((dropdownLink) => (
                        <Link
                          key={dropdownLink.href}
                          href={dropdownLink.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[var(--primary-teal)] transition-colors"
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative ${
                  pathname === link.href
                    ? "text-[var(--primary-teal)] after:w-full after:left-0"
                    : "text-gray-600 hover:text-[var(--primary-teal)] after:w-0 after:left-0 hover:after:w-full"
                } transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:h-[2px] after:bg-[var(--primary-teal)] after:transition-all after:duration-300`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          className="md:hidden text-gray-600 hover:text-[var(--primary-teal)] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-[60px] left-0 right-0 z-10 transition-all duration-300 ease-in-out">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div key={link.href} className="flex flex-col">
                    <div className="flex items-center cursor-pointer">
                      <span
                        className={`text-sm font-medium py-1 relative flex-1 ${
                          pathname === link.href || isMobileServicesOpen
                            ? "text-[var(--primary-teal)] after:w-full after:left-0"
                            : "text-gray-600 hover:text-[var(--primary-teal)] after:w-0 after:left-0 hover:after:w-full"
                        } transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[var(--primary-teal)] after:transition-all after:duration-300`}
                        style={{
                          display: "inline-block",
                          position: "relative",
                        }}
                        onClick={() => {
                          if (isMobileServicesOpen) {
                            window.location.href = link.href;
                            setIsMobileMenuOpen(false);
                          } else {
                            setIsMobileServicesOpen(true);
                          }
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        className="ml-2 inline-block cursor-pointer"
                        onClick={() =>
                          setIsMobileServicesOpen(!isMobileServicesOpen)
                        }
                      >
                        <ChevronDown
                          className={`h-5 w-5 text-[var(--primary-teal)] transform ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          } transition-transform duration-300`}
                        />
                      </span>
                    </div>
                    {isMobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out flex flex-col">
                        {servicesDropdown.map((dropdownLink) => (
                          <Link
                            key={dropdownLink.href}
                            href={dropdownLink.href}
                            className={`text-sm font-medium py-1 relative ${
                              pathname === dropdownLink.href
                                ? "text-[var(--primary-teal)] after:w-full after:left-0"
                                : "text-gray-600 hover:text-[var(--primary-teal)] after:w-0 after:left-0 hover:after:w-full"
                            } transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[var(--primary-teal)] after:transition-all after:duration-300`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-1 relative ${
                    pathname === link.href
                      ? "text-[var(--primary-teal)] after:w-full after:left-0"
                      : "text-gray-600 hover:text-[var(--primary-teal)] after:w-0 after:left-0 hover:after:w-full"
                  } transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:h-[2px] after:bg-[var(--primary-teal)] after:transition-all after:duration-300`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
