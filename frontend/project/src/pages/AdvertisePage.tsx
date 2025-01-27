import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdvertisePage: React.FC = () => {
  const navigate = useNavigate();

  // Simulate session validation (replace with actual session management logic)
  const isUserLoggedIn = (): boolean => {
    const userSession = localStorage.getItem('user'); // Example: Check for user session in local storage
    return !!userSession; // Return true if session exists, false otherwise
  };

  useEffect(() => {
    if (!isUserLoggedIn()) {
      // Redirect to login if user is not logged in
      navigate('/advertise');
    }
  }, [navigate]);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 py-14">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Advertise with Us</h1>
          <p className="text-gray-600 mt-2">
            Reach millions of users and grow your brand with our advertising opportunities.
          </p>
        </div>

        {/* Advertising Benefits */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Wide Audience</h2>
            <p className="text-gray-600 mt-2">
              Showcase your brand to a global audience and increase visibility.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Custom Campaigns</h2>
            <p className="text-gray-600 mt-2">
              Tailored advertising solutions to fit your needs and maximize ROI.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-800">Affordable Rates</h2>
            <p className="text-gray-600 mt-2">
              Flexible pricing plans that cater to businesses of all sizes.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your advertising needs"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdvertisePage;
