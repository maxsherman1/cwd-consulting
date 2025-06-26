import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} CWD Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
