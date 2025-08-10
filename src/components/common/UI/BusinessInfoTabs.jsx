'use client';
import React, { useState } from 'react';
import {
  TabDes,
  TabHeader,
  TabImage,
  TabImageContainer,
  TabItem,
  TabList,
  TabsProvider,
} from './ImageTabs';

import h1 from '@images/hero/h1.jpg'
import h2 from '@images/projects/p1.jpg'
import h3 from '@images/projects/p2.jpg'

const BusinessInfoTabs = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  const businessTabs = [
    {
      title: 'Why Choose DigitalBizs for Your Website?',
      id: 'choose',
      description:
        'We are a dedicated team that builds meaningful websites for real businesses. We listen carefully to your needs and create digital solutions that help your business thrive online with modern technology and personal attention.',
      imageUrl: h1
    },
    {
      title: 'What Makes Our Websites Different?',
      id: 'different',
      description:
        'Every project receives our complete attention because your success drives us forward. We build custom websites from scratch, designed specifically for your business goals with clean code, modern design, and built to grow with your business.',
      imageUrl: h2
    },
    {
      title: 'How Do We Support Your Business Growth?',
      id: 'support',
      description:
        'We provide ongoing website care, maintenance, regular updates, and quick fixes. From building your first website to growing your online presence, we are here to support your journey every step of the way.',
      imageUrl: h3
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 sm:mb-6 leading-tight">
          <span className="text-[#0085c3]">Let's Build</span> Something Great Together!
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
          Discover the unique approach that helps businesses grow online with confidence.
        </p>
      </div>

      {/* Tabs Component */}
      <div className="max-w-7xl mx-auto">
        <TabsProvider
          defaultValue="choose"
          className="flex flex-col lg:grid lg:grid-cols-12 items-start justify-center gap-6 lg:gap-8">
          
          <TabList className="w-full lg:col-span-5 space-y-3 sm:space-y-4">
            {businessTabs.map((tab, index) => (
              <TabItem key={index} value={tab.id} className="w-full">
                <TabHeader 
                  value={tab.id} 
                  className="w-full text-left p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-[#0085c3] hover:shadow-sm transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#0085c3] transition-colors duration-300 leading-snug">
                    {tab.title}
                  </h3>
                </TabHeader>
                
                <TabDes value={tab.id} className="mt-3 sm:mt-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <p className="text-sm sm:text-base text-gray-700 p-4 sm:p-6 leading-relaxed">
                      {tab.description}
                    </p>
                    {/* Mobile image - Only show on small screens with lazy loading */}
                    <div className="lg:hidden">
                      <img
                        src={tab.imageUrl}
                        alt={tab.title}
                        loading="lazy"
                        decoding="async"
                        onLoad={() => handleImageLoad(`mobile-${tab.id}`)}
                        className={`w-full h-40 sm:h-48 object-cover transition-opacity duration-300 ${
                          loadedImages.has(`mobile-${tab.id}`) ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{
                          backgroundColor: loadedImages.has(`mobile-${tab.id}`) ? 'transparent' : '#f3f4f6'
                        }}
                      />
                    </div>
                  </div>
                </TabDes>
              </TabItem>
            ))}
          </TabList>

          {/* Desktop Images - Hidden on mobile, visible on large screens with lazy loading */}
          <TabImageContainer className="hidden lg:block lg:col-span-7">
            {businessTabs.map((tab, index) => (
              <TabImage key={index} value={tab.id} className="w-full h-full">
                <div className="relative w-full h-96 xl:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={tab.imageUrl}
                    alt={tab.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(`desktop-${tab.id}`)}
                    className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
                      loadedImages.has(`desktop-${tab.id}`) ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      backgroundColor: loadedImages.has(`desktop-${tab.id}`) ? 'transparent' : '#f3f4f6'
                    }}
                  />
                  {/* Optional overlay with branding */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0085c3]/20 via-transparent to-transparent"></div>
                </div>
              </TabImage>
            ))}
          </TabImageContainer>
        </TabsProvider>
      </div>
    </section>
  );
};

export default BusinessInfoTabs;