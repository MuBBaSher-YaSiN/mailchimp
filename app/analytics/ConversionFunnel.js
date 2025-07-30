"use client";

import React from "react";

// Reusable arrow component
const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" fill="black">
    <polygon points="35,15 70,50 35,85" />
  </svg>
);

// Drop-off section component
const DropOff = () => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 text-black">
      <span>--</span>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
    <span className="text-[14px] mt-1">Drop-off</span>
  </div>
);

// Metric item (Deliveries, Opened, Clicked)
const MetricItem = ({ title, value }) => (
  <div>
    <div>
      <span className="text-[16px] text-[#21262A] border-b-2 border-dashed border-[#6b6b6b]">{title}</span>
    </div>
    <div className="mt-2">
      <span className="text-[24px] font-medium text-[#21262A]">{value}</span>
    </div>
  </div>
);

// Arrow connector with drop-off
const FunnelConnector = () => (
  <div className="w-[400px]">
    <div className="flex items-center">
      <div className="w-full border-t border-dashed border-[#6b6b6b]"></div>
      <ArrowRight />
    </div>
    <DropOff />
  </div>
);

// Main Conversion Funnel component
const ConversionFunnel = () => {
  return (
    <div>
      {/* Click rate metric */}
      <div className="mt-8">
        <div>
          <span className="text-[16px] text-black border-b-2 border-dashed border-[#6b6b6b]">Click rate</span>
        </div>
        <div className="mt-2 flex items-baseline">
          <span className="text-[24px] font-medium text-[#21262A]">0%</span>
          <span className="text-[16px] text-[#6b6b6b] bg-[#f0f4f6] ml-3 w-8 h-8 p-[3px] rounded-full font-bold text-center">--</span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-8 mt-40"></div>

      {/* Conversion funnel rows */}
      <div className="flex justify-between mt-6 items-center">
        <div className="">
          <MetricItem title="Deliveries" value="0" />
        </div>
        <FunnelConnector />
        <MetricItem title="Opened" value="0" />
        <FunnelConnector />
        <MetricItem title="Clicked" value="0" />
      </div>
    </div>
  );
};

export default ConversionFunnel;
