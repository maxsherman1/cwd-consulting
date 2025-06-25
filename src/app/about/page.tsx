import React from 'react';
import { Metadata } from 'next';
// import { Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | CWD Consulting',
  description: 'Learn more about CWD Consulting, our mission, and our dedicated team.',
};

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#3B7B94] mb-4">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl">
          At CWD Consulting, we are committed to empowering businesses by providing expert guidance and innovative solutions. 
          Our mission is to help organizations navigate complex challenges, seize opportunities, and achieve sustainable growth.
        </p>
      </section>

      {/* Team Section
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#3B7B94] mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-[#7DA8C2]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-[#3B7B94] font-medium">Founder & CEO</p>
            <p className="text-gray-600 mt-2">
              John brings over 20 years of experience in strategic consulting, leading our team with vision and expertise.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-[#7DA8C2]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-[#3B7B94] font-medium">Chief Strategy Officer</p>
            <p className="text-gray-600 mt-2">
              Jane specializes in market analysis and strategy development, helping clients achieve their long-term goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
              <Users className="h-12 w-12 text-[#7DA8C2]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Michael Brown</h3>
            <p className="text-[#3B7B94] font-medium">Head of Innovation</p>
            <p className="text-gray-600 mt-2">
              Michael drives our digital transformation initiatives, ensuring clients stay ahead with cutting-edge solutions.
            </p>
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      <section>
        <h2 className="text-2xl font-semibold text-[#3B7B94] mb-6">Chris Darbyshire&apos;s career timeline</h2>
        <div className="space-y-8 max-w-3xl">
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">2019 - Present</h3>
              <p className="text-gray-600">Chief investment officer, Walker Crips</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">2012 - 2019</h3>
              <p className="text-gray-600">Chief investment officer, 7IM</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">2007 - 2012</h3>
              <p className="text-gray-600">Vice-president: fixed income, currencies and commodities, Goldman Sachs </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">2004 - 2007</h3>
              <p className="text-gray-600">Manager: portfolio solutions, BNP Paribas </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">2001 - 2004</h3>
              <p className="text-gray-600">Equity research analyst, BNP Paribas</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">1994 - 1999</h3>
              <p className="text-gray-600">Chief financial officer, Transportation Displays Incorporated</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">1991 - 1994</h3>
              <p className="text-gray-600">Equity research analyst, Hambros Bank</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-4 h-4 bg-[#3B7B94] rounded-full mt-1 mr-4"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">1990 - 1991</h3>
              <p className="text-gray-600">Journalist, Euromoney Publications plc</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
