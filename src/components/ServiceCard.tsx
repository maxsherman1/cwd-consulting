"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ServiceCardProps {
  variant: "simple" | "detailed";
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
  onToggle,
}: ServiceCardProps) {
  const [internalExpanded, setInternalExpanded] = useState(isExpanded);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const expanded = onToggle ? isExpanded : internalExpanded;

  useEffect(() => {
    if (contentRef.current) {
      if (expanded) {
        setContentHeight(contentRef.current.scrollHeight);
      } else {
        setContentHeight(0);
      }
    }
  }, [expanded]);

  const handleToggle = () => {
    const newExpandedState = !internalExpanded;
    setInternalExpanded(newExpandedState);
    if (onToggle) {
      onToggle(newExpandedState);
    }
  };

  if (variant === "simple") {
    const cardContent = (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-103 hover:bg-[var(--primary-teal)]/5 transition-all duration-400 cursor-pointer">
        {icon && <div className="mb-4">{icon}</div>}
        <h2 className="text-xl font-semibold text-[var(--primary-teal)] mb-2">
          {title}
        </h2>
        {description && <p className="text-gray-600">{description}</p>}
      </div>
    );

    return link ? <Link href={link}>{cardContent}</Link> : cardContent;
  }

  // Detailed variant
  return (
    <div
      className="bg-white p-6 pb-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[var(--primary-teal)]/5 transition-all duration-400 cursor-pointer flex flex-col"
      onClick={handleToggle}
    >
      <h3 className="text-xl font-semibold text-[var(--primary-teal)] mb-2">
        {title}
      </h3>
      {frequency && (
        <p className="text-gray-600">
          <strong>Frequency:</strong> {frequency}
        </p>
      )}
      {details && (
        <div
          ref={contentRef}
          className={`mt-2 mb-0 text-gray-700 overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ maxHeight: expanded ? `${contentHeight}px` : '0px' }}
        >
          {details}
        </div>
      )}
      {details && (
        <div className="flex justify-center mt-auto pt-2">
          <ChevronDown
            className={`h-5 w-5 text-[var(--primary-teal)] transform ${
              expanded ? "rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>
      )}
    </div>
  );
}
