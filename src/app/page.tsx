import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | CWD Consulting",
  description: "Empowering your business through expert consulting.",
  openGraph: {
    title: "CWD Consulting",
    description: "Empowering your business through expert consulting.",
    url: "https://cwdconsulting.co.uk",
    siteName: "CWD Consulting",
    images: [
      {
        url: "/images/cwd_logo.png",
        width: 1200,
        height: 630,
        alt: "CWD Consulting Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <section className="container mx-auto bg-white rounded-lg shadow-md p-8 text-center pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
          CWD Consulting
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6 order-1 md:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg border border-gray-200" style={{ width: '100%', height: '300px', aspectRatio: '1 / 1' }}>
              <img 
                src="/images/profile_pic_2.jpg" 
                alt="Chris Darbyshire, Director" 
                className="absolute inset-0 object-cover object-center" 
                style={{ objectPosition: 'center', width: '100%', height: '100%' }} 
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">Chris Darbyshire, Director</p>
          </div>
          <div className="md:w-2/3 order-2 md:order-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-teal)] mb-6">
              Filling resource gaps for start-ups, small, and medium-sized
              investment management firms.
            </h1>
            <p className="text-gray-600 mb-4">
              Spearheaded by our Director Chris Darbyshire, backed by his
              expertise in the Finance and Investment worlds, we offer solutions
              for Investment Management firms that desire world class resources
              and knowledge to bolster performance and resolve organisational
              challenges.
            </p>
            <Link
              href="/services"
              className="inline-block bg-[var(--primary-teal)] text-white px-6 py-3 rounded-md font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section with Key Pillars */}
      <section className="py-6 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[var(--primary-teal)] mb-3">
                Strategy
              </h3>
              <p className="text-gray-600">
                Crafting tailored strategies to drive your business forward with
                precision and insight.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[var(--primary-teal)] mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Leveraging cutting-edge solutions to keep you ahead in a rapidly
                evolving market.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[var(--primary-teal)] mb-3">
                Delivery
              </h3>
              <p className="text-gray-600">
                Ensuring seamless execution and measurable results with every
                project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
