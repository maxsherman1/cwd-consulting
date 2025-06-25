import React from 'react';
import { Metadata } from 'next';
import { TrendingUp, ClipboardCheck } from 'lucide-react';
import servicesData from '../../data/services.json';
import ServiceCard from '../../components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services | CWD Consulting',
  description: 'Discover the range of expert consulting services we offer to empower your business.',
};

export default function Services() {
  const services = servicesData.mainServices.map(service => ({
    ...service,
    icon: service.icon === 'TrendingUp' 
      ? <TrendingUp className="h-10 w-10 text-[#3B7B94]" /> 
      : <ClipboardCheck className="h-10 w-10 text-[#3B7B94]" />
  }));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            variant="simple"
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}
