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
    {
      title: "Market Trends 2025",
      description:
        "Analysis of upcoming market shifts and how businesses can prepare for change.",
      link: "#", // Placeholder link
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
        Research & Insights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <FileText className="h-10 w-10 text-[var(--primary-teal)] mb-4" />
            <h2 className="text-xl font-semibold text-[var(--primary-teal)] mb-2">
              {paper.title}
            </h2>
            <p className="text-gray-600 mb-4">{paper.description}</p>
            <a
              href={paper.link}
              className="text-[var(--primary-teal)] font-medium hover:underline"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
