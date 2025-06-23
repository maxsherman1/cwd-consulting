'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    try {
      const response = await fetch('https://formspree.io/f/movwknvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#3B7B94] mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B7B94]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B7B94]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B7B94]"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              className="bg-[#3B7B94] text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-opacity"
            >
              {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {submissionStatus === 'success' && (
              <div className="text-med mt-2">
                Your message has been sent successfully. We will get back to you as soon as possible.
              </div>
            )}
            {submissionStatus === 'error' && (
              <div className="text-red-500 text-med mt-2">
                There was an error sending your message. Please try again or contact us directly at info@cwdconsulting.co.uk or +44 20 1234 5678.
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#3B7B94] mb-4">Our Contact Details</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-6 w-6 text-[#3B7B94] mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">info@cwdconsulting.co.uk</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-6 w-6 text-[#3B7B94] mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+44 20 1234 5678</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-6 w-6 text-[#3B7B94] mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">123 Business Avenue, London, EC1A 1BB, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
