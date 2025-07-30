"use client";

import React from 'react';

export default function ContactSummary() {
  return (
    <div className="bg-[#f9f9f9] px-4 py-6">
      {/* Summary Card */}
      <div className="max-w-[1200px] mx-auto bg-white border border-[#e6e6e6] rounded-lg p-6">
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-2xl font-medium text-[#241c15]">Summary</h2>
          <button className="text-[#6b6b6b]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.25 3.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="text-[14px]">
          Contact counts are cumulative to date • Compared to last year
        </div>
        
        <div className="mt-4 border-t border-[#e6e6e6] pt-4"></div>
        
        <div className="grid grid-cols-4 gap-4">
          {/* Total contacts */}
          <div>
            <div className="border-b border-dashed border-[#007c89] pb-1">
              <span className="text-lg">Total contacts</span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-medium text-[#241c15]">4</span>
            </div>
            <div className="mt-1">
              <span className="text-[14px] text-[#6b6b6b]">--</span>
            </div>
          </div>
          
          {/* Subscribed */}
          <div>
            <div className="border-b border-dashed border-[#007c89] pb-1">
              <span className="text-lg ">Subscribed</span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-medium text-[#241c15]">4</span>
            </div>
            <div className="mt-1">
              <span className="text-[14px] text-[#6b6b6b]">--</span>
            </div>
          </div>
          
          {/* Non-Subscribed */}
          <div>
            <div className="border-b border-dashed border-[#007c89] pb-1">
              <span className="text-lg">Non-Subscribed</span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-medium text-[#241c15]">0</span>
            </div>
            <div className="mt-1">
              <span className="text-[14px] text-[#6b6b6b]">--</span>
            </div>
          </div>
          
          {/* Unsubscribed */}
          <div>
            <div className="border-b border-dashed border-[#007c89] pb-1">
              <span className="text-lg ">Unsubscribed</span>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-medium text-[#241c15]">0</span>
            </div>
            <div className="mt-1">
              <span className="text-[14px] text-[#6b6b6b]">--</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Date Range */}
      <div className="max-w-[1200px] mx-auto mt-6">
        <div className="mb-2">
          <label className="text-[14px] text-[#241c15]">Date range</label>
        </div>
        <div className="relative w-full sm:w-[240px]">
          <input 
            type="text" 
            value="Last 30 days" 
            readOnly
            className="w-full border border-[#cdcdcd] rounded px-3 py-2 pr-10 text-[14px]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#6b6b6b]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
