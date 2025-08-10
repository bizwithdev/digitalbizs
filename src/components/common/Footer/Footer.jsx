'use client';
import React from 'react';

const Footer = () => {
  return (
    <div className="relative h-full bg-[#f7f7f7] text-black py-8 sm:py-12">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            <span className="text-[#0085c3]">Ready to Get the Website Your Business Deserves?</span> 
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            We don't just build websites - we create digital tools that help your business succeed.
          </p>
        </div>
        
        {/* Copyright */}
        <div className="text-center pt-4 sm:pt-6 border-t border-gray-300">
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            &copy; 2025 DigitalBizs. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;