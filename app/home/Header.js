"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 py-6 px-4 md:px-6 bg-white z-1 border-b border-[#e6e6e6] flex items-center justify-between">
      {/* Left side - Home title */}
      <h1 className="text-[24px] font-medum text-[#21262A]">Home</h1>
      
      {/* Right side - Actions */}
      <div className="flex items-center gap-3">
        {/* Quick Actions Dropdown */}
        <div className="relative">
          <button 
            className="normal_text px-3 py-1.5 border border-[#d9d9d9] rounded-md bg-white hover:bg-gray-50 flex items-center gap-2 transition-colors"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>Quick actions</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="19" 
              height="19" 
              viewBox="0 0 16 16" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-[#666]"
            >
              <path d="M4 6l4 4 4-4" />
            </svg>
          </button>
          
          {/* Dropdown Menu (hidden by default) */}
          {/* Uncomment to show dropdown
          <div className="absolute right-0 mt-1 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-10 hidden">
            <div className="py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action 1</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action 2</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action 3</a>
            </div>
          </div>
          */}
        </div>

        {/* Create Email Button */}
        <button 
          className="px-4 py-1.5 bg-[#007c89] hover:bg-[#005d68] text-white rounded-md text-sm font-medium transition-colors"
        >
          Create Email
        </button>
      </div>
    </header>
  );
}
