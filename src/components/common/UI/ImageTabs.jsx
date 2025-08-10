'use client';
import React, { createContext, useContext, useState } from 'react';

// Context for managing tab state
const TabsContext = createContext();

// Main provider component
export const TabsProvider = ({ children, defaultValue, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// Hook to use tabs context
const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tab components must be used within TabsProvider');
  }
  return context;
};

// Tab list container
export const TabList = ({ children, className = "" }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};

// Individual tab item
export const TabItem = ({ children, value, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Tab header (clickable part)
export const TabHeader = ({ children, value, className = "" }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`w-full text-left transition-all duration-300 ${className} ${
        activeTab === value 
          ? 'border-[#0085c3] bg-[#0085c3]/10 text-[#0085c3]' 
          : 'border-gray-200 hover:border-[#0085c3]/50'
      }`}
    >
      {children}
    </button>
  );
};

// Tab description/content
export const TabDes = ({ children, value, className = "" }) => {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== value) return null;
  
  return (
    <div className={`animate-in fade-in duration-300 ${className}`}>
      {children}
    </div>
  );
};

// Image container for all tab images
export const TabImageContainer = ({ children, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
};

// Individual tab image
export const TabImage = ({ children, value, className = "" }) => {
  const { activeTab } = useTabsContext();
  
  if (activeTab !== value) return null;
  
  return (
    <div className={`animate-in fade-in duration-500 ${className}`}>
      {children}
    </div>
  );
};