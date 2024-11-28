'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col bg-white"
      style={{ backgroundImage: 'url("/Group 1 (1).png")' }}
    >
      {/* Navbar */}
      <nav className="w-full px-4 py-3 md:py-6 lg:px-0">
        <div className="w-[90%] max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="w-32 md:w-40 lg:w-48">
            <Image
              src="/Logo (1).png"
              alt="Puerii Logo"
              width={90}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex space-x-6 text-black">
              {['Product', 'Integration', 'Demo', 'Resources', 'Pricing', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base lg:text-lg hover:text-gray-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Call-to-Actions */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm md:text-base text-[#5350F7]">
              Sign In
            </a>
            <button className="hidden lg:block bg-[#5350F7] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg transition-colors">
              Create a Plan
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={handleToggleMobileMenu}
              className="text-black text-2xl focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 lg:hidden" onClick={handleToggleMobileMenu}>
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-white">
              {['Children\'s Plans', 'Investments', 'Testimonies', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xl"
                  onClick={handleToggleMobileMenu}
                >
                  {item}
                </a>
              ))}
              <button
                className="bg-white text-black px-6 py-3 rounded-lg"
                onClick={handleToggleMobileMenu}
              >
                Create a Plan
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="w-[90%] max-w-6xl mx-auto px-4 flex-grow flex flex-col justify-center mt-12 lg:mt-28">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="max-w-xl mx-auto flex flex-col items-center lg:items-center text-center lg:text-left gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-snug">
              Seamlessly manage your{' '}
              <span className="text-[#5350F7]">equity & cap-table</span>
            </h1>
            <p className="text-sm md:text-base text-center lg:text-lg text-gray-700">
              Manage people and equity, automate team’s payroll, and manage access all in one place.
              Human resource has never been better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5350F7] text-white px-5 py-2 md:px-6 md:py-3 rounded-lg">
                Get started for free
              </button>
              <button className="flex items-center border border-black text-black px-5 py-2 md:px-6 md:py-3 rounded-lg">
                <img src="/arrow-right.svg" alt="Arrow" className="mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12">
          <Image
            src="/Overview.png"
            alt="Overview"
            width={1200}
            height={600}
            className="w-full max-w-4xl mt-10 mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
