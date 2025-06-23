import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { DollarSign, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | CWD Consulting',
  description: 'Discover the range of expert consulting services we offer to empower your business.',
};

export default function Services() {
  const services = [
    {
      icon: <DollarSign className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Investment Services',
      description: 'Strategic financial planning and investment management to maximize returns and mitigate risks.',
      link: '/services/investment',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Product Governance',
      description: 'Ensuring compliance and efficiency through robust product governance frameworks.',
      link: '/services/governance',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-[#3B7B94]/5 transition-all duration-300 cursor-pointer">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-[#3B7B94] mb-2">{service.title}</h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
