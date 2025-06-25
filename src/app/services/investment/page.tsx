'use client';

import React, { useState } from 'react';
import { Search, FileSearch, BarChart3, MessageSquareText } from 'lucide-react';
import servicesData from '../../../data/services.json';
import ServiceCard from '../../../components/ServiceCard';


export default function InvestmentServices() {
  const [expandedService, setExpandedService] = useState<{ subheading: string, index: number } | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="h-10 w-10 text-[#3B7B94]" />;
      case 'FileSearch':
        return <FileSearch className="h-10 w-10 text-[#3B7B94]" />;
      case 'BarChart3':
        return <BarChart3 className="h-10 w-10 text-[#3B7B94]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="h-10 w-10 text-[#3B7B94]" />;
      default:
        return <Search className="h-10 w-10 text-[#3B7B94]" />;
    }
  };

  const toggleExpand = (subheading: string, index: number) => {
    setExpandedService(expandedService && expandedService.subheading === subheading && expandedService.index === index ? null : { subheading, index });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Investment Services</h1>
      <div className="space-y-8">
        {Object.entries(servicesData.investmentServices).map(([subheading, category]) => (
          <div key={subheading} className="mb-8">
            <div className="flex items-center mb-6">
              <div className="mr-3">{getIconComponent(category.icon)}</div>
              <h2 className="text-2xl font-bold text-[#3B7B94]">{subheading.replace(/([A-Z])/g, ' $1')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              {category.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  variant="detailed"
                  title={service.title}
                  frequency={service.frequency}
                  details={service.details}
                  isExpanded={!!(expandedService && expandedService.subheading === subheading && expandedService.index === index)}
                  onToggle={() => toggleExpand(subheading, index)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
