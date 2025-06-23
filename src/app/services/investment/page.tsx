import React from 'react';
import { Metadata } from 'next';
import { Brain, Target, Rocket, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Investment Services | CWD Consulting',
  description: 'Expert investment consulting services to help your business grow.',
};

export default function InvestmentServices() {
  const services = [
    {
      icon: <Brain className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Strategic Planning',
      description: 'Developing comprehensive strategies to align your business goals with actionable plans.',
    },
    {
      icon: <Target className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Market Analysis',
      description: 'In-depth market research and analysis to identify opportunities and mitigate risks.',
    },
    {
      icon: <Rocket className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Digital Transformation',
      description: 'Driving innovation through technology to enhance efficiency and competitiveness.',
    },
    {
      icon: <Shield className="h-10 w-10 text-[#3B7B94]" />,
      title: 'Risk Management',
      description: 'Implementing robust frameworks to protect your business from potential threats.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Investment Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 hover:bg-[#3B7B94]/5 transition-all duration-300">
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-[#3B7B94] mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
