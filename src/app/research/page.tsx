import React from "react";
import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Insights | CWD Consulting",
  description:
    "Access our latest research papers and whitepapers on business strategy and innovation.",
};

export default function Research() {
  const papers = [
    {
      title: "Future of Digital Transformation",
      description:
        "Exploring the impact of emerging technologies on business operations and strategy.",
      link: "#", // Placeholder link
    },
    {
      title: "Sustainable Business Practices",
      description:
        "A comprehensive guide to integrating sustainability into corporate strategy.",
      link: "#", // Placeholder link
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Research & Insights
      </h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-auto md:h-96 overflow-auto flex-1">
            <FileText className="h-10 w-10 text-[var(--primary-teal)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-teal)] mb-2">
              {papers[0].title}
            </h2>
            <p className="text-gray-600 mb-4">{papers[0].description}</p>
            <a
              href={papers[0].link}
              className="text-[var(--primary-teal)] font-medium hover:underline"
            >
              Download PDF
            </a>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 h-auto md:h-96 flex justify-center items-center w-auto">
            <img
              src="/images/spectator_events.jpg"
              alt="Spectator Event 1"
              className="object-contain object-top w-auto h-full max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200 h-auto md:h-96 flex justify-center items-center w-auto">
            <img
              src="/images/spectator_events_2.jpg"
              alt="Spectator Event 2"
              className="object-contain object-center w-auto h-full max-w-full"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-auto md:h-96 overflow-auto flex-1">
            <FileText className="h-10 w-10 text-[var(--primary-teal)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-teal)] mb-2">
              {papers[1].title}
            </h2>
            <p className="text-gray-600 mb-4">{papers[1].description}</p>
            <a
              href={papers[1].link}
              className="text-[var(--primary-teal)] font-medium hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
