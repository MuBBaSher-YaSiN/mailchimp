"use client";

import React from 'react';

export default function SubscriberBreakdown() {
  return (
    <div className="bg-white p-4 font-sans">
      {/* Time period selector */}
      <div className="flex rounded-md border border-[#e0e0e0] w-fit overflow-hidden">
        <button className="px-5 py-1.5 text-[14px] bg-white text-[#000000] font-normal">
          Day
        </button>
        <button className="px-5 py-1.5 text-[14px] bg-[#f6f7f8] text-[#6b6b6b] font-normal border-x border-[#e0e0e0]">
          Week
        </button>
        <button className="px-5 py-1.5 text-[14px] bg-[#f6f7f8] text-[#6b6b6b] font-normal">
          Month
        </button>
      </div>

      {/* Channel breakdown */}
      <div className="mt-8">
        <h3 className="text-[15px] font-medium text-[#241c15] mb-4">
          Total subscribers by channel
        </h3>
        
        <div className="flex justify-between items-center py-2 border-b border-[#e6e6e6]">
          <span className="text-[14px] text-[#241c15]">Email only</span>
          <div className="flex items-center">
            <span className="text-[14px] text-[#241c15] mr-10">100%</span>
            <span className="text-[14px] font-medium text-[#241c15]">4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
