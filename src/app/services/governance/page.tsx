'use client';

import React, { useState } from 'react';
import { Brain, Target, Rocket, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import servicesData from '../../../data/services.json';

export default function ProductGovernance() {
  const [expandedService, setExpandedService] = useState<{ subheading: string, index: number } | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="h-10 w-10 text-[#3B7B94]" />;
      case 'Target':
        return <Target className="h-10 w-10 text-[#3B7B94]" />;
      case 'Rocket':
        return <Rocket className="h-10 w-10 text-[#3B7B94]" />;
      case 'Shield':
        return <Shield className="h-10 w-10 text-[#3B7B94]" />;
      default:
        return <Brain className="h-10 w-10 text-[#3B7B94]" />;
    }
  };

  const toggleExpand = (subheading: string, index: number) => {
    setExpandedService(expandedService && expandedService.subheading === subheading && expandedService.index === index ? null : { subheading, index });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Product Governance</h1>
      <div className="space-y-12">
        {Object.entries(servicesData.governanceServices).map(([subheading, category]) => (
          <div key={subheading} className="mb-8">
            <div className="flex items-center mb-6">
              <div className="mr-3">{getIconComponent(category.icon)}</div>
              <h2 className="text-2xl font-bold text-[#3B7B94]">{subheading.replace(/([A-Z])/g, ' $1')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {category.services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-[#3B7B94]/5 transition-all duration-300 cursor-pointer flex flex-col"
                  onClick={() => toggleExpand(subheading, index)}
                >
                  <h3 className="text-xl font-semibold text-[#3B7B94] mb-2">{service.title}</h3>
                  <p className="text-gray-600"><strong>Frequency:</strong> {service.frequency}</p>
                  {expandedService && expandedService.subheading === subheading && expandedService.index === index && (
                    <div className="mt-2 mb-2 text-gray-700">{service.details}</div>
                  )}
                  <div className="flex justify-center mt-auto pt-2">
                    {expandedService && expandedService.subheading === subheading && expandedService.index === index ? 
                      <ChevronUp className="h-5 w-5 text-[#3B7B94]" /> : 
                      <ChevronDown className="h-5 w-5 text-[#3B7B94]" />
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
