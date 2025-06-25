'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  variant: 'simple' | 'detailed';
  icon?: React.ReactNode;
  title: string;
  description?: string;
  frequency?: string;
  details?: string;
  link?: string;
  isExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
}

export default function ServiceCard({
  variant,
  icon,
  title,
  description,
  frequency,
  details,
  link,
  isExpanded = false,
  onToggle
}: ServiceCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(isExpanded);

  const handleToggle = () => {
    const newExpandedState = !internalExpanded;
    setInternalExpanded(newExpandedState);
    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  const expanded = onToggle ? isExpanded : internalExpanded;

  if (variant === 'simple') {
    const cardContent = (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-103 hover:bg-[#3B7B94]/5 transition-all duration-400 cursor-pointer">
        {icon && <div className="mb-4">{icon}</div>}
        <h2 className="text-xl font-semibold text-[#3B7B94] mb-2">{title}</h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    );

    return link ? (
      <Link href={link}>
        {cardContent}
      </Link>
    ) : (
      cardContent
    );
  }

  // Detailed variant
  return (
    <div
      className="bg-white p-6 pb-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#3B7B94]/5 transition-all duration-400 cursor-pointer flex flex-col"
      onClick={handleToggle}
    >
      <h3 className="text-xl font-semibold text-[#3B7B94] mb-2">{title}</h3>
      {frequency && <p className="text-gray-600"><strong>Frequency:</strong> {frequency}</p>}
      {details && expanded && (
        <div className="mt-2 mb-0 text-gray-700">{details}</div>
      )}
      {details && (
        <div className="flex justify-center mt-auto pt-2">
          {expanded ? (
            <ChevronUp className="h-5 w-5 text-[#3B7B94]" />
          ) : (
            <ChevronDown className="h-5 w-5 text-[#3B7B94]" />
          )}
        </div>
      )}
    </div>
  );
}
