'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/research', label: 'Research' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const servicesDropdown = [
    { href: '/services/investment', label: 'Investment Services' },
    { href: '/services/governance', label: 'Product Governance' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/cwd_logo.png" alt="CWD Consulting Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-[#3B7B94] font-sans">CWD Consulting</span>
        </Link>
        <div className="flex space-x-6">
          {navLinks.map((link) => {
            if (link.label === 'Services') {
              return (
                <div 
                  key={link.href} 
                  className="relative flex items-center"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`text-sm font-medium ${
                      pathname === link.href ? 'text-[#3B7B94]' : 'text-gray-600 hover:text-[#3B7B94]'
                    } transition-colors`}
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
                          className="block px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[#3B7B94] transition-colors"
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
                className={`text-sm font-medium ${
                  pathname === link.href ? 'text-[#3B7B94]' : 'text-gray-600 hover:text-[#3B7B94]'
                } transition-colors`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
