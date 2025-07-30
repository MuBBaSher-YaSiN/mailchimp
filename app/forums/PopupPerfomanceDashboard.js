"use client";

import React from 'react';

export default function PopupPerformanceDashboard() {
  return (
    <div className="max-w-[1248px] mx-auto p-6 mt-60">
      <div className="bg-white border border-[#e6e6e6] rounded-lg p-4 px-6 shadow-sm">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between border-b border-zinc-300 pb-3 items-start md:items-center mb-6">
          <div>
            <h2 className="heading_text text-[#21262A]">Overall popup performance</h2>
            <p className="text-[14px] text-[#21262A]">
              May 26, 2025 - June 25, 2025 • Compared to previous 30 days
            </p>
          </div>
          <div className='xl:w-[350px] flex items-center justify-between border border-[#e6e6e6] px-4 py-0.5 rounded-lg text-[#21262A]'>
            <button className="flex items-center w-full py-2 text-[14px]">
              Previous 30 days
            </button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {/* Site visitors */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="text-[#21262A] text-[16px] border-b-2 border-dashed border-[#017E89] underline-offset-4">
                Site visitors
              </span>
              <button className="ml-1.5 text-[#60676c]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor" />
                  <path d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 14.3284 11.1716 15 12 15Z" fill="currentColor" />
                  <path d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="flex items-baseline">
              <span className="text-[26px] font-medium text-[#21262A] mr-2">--</span>
              <span className="text-[14px] text-[#60676c]">--</span>
            </div>
          </div>

          {/* Unique impressions */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="text-[#21262A] text-[16px] border-b-2 border-dashed border-[#017E89] underline-offset-4">
                Unique impressions
              </span>
              <button className="ml-1.5 text-[#60676c]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor" />
                  <path d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 14.3284 11.1716 15 12 15Z" fill="currentColor" />
                  <path d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="flex items-baseline">
              <span className="text-[26px] font-medium text-[#21262A] mr-2">--</span>
              <span className="text-[14px] text-[#60676c]">--</span>
            </div>
          </div>

          {/* Email opt-in rate */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="text-[#21262A] text-[16px] border-b-2 border-dashed border-[#017E89] underline-offset-4">
                Email opt-in rate
              </span>
              <button className="ml-1.5 text-[#60676c]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor" />
                  <path d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 14.3284 11.1716 15 12 15Z" fill="currentColor" />
                  <path d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="flex items-baseline">
              <span className="text-[26px] font-medium text-[#21262A] mr-2">--<span className="text-[22px]">%</span></span>
              <span className="text-[14px] text-[#60676c]">--</span>
            </div>
            <span className="text-[12px] text-[#60676c]">-- email captures</span>
          </div>

          {/* SMS opt-in rate */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-2">
              <span className="text-[#21262A] text-[16px] border-b-2 border-dashed border-[#017E89] underline-offset-4">
                SMS opt-in rate
              </span>
              <button className="ml-1.5 text-[#60676c]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z" fill="currentColor" />
                  <path d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5C13.5 12.6716 12.8284 12 12 12C11.1716 12 10.5 12.6716 10.5 13.5C10.5 14.3284 11.1716 15 12 15Z" fill="currentColor" />
                  <path d="M12 11C12.8284 11 13.5 10.3284 13.5 9.5C13.5 8.67157 12.8284 8 12 8C11.1716 8 10.5 8.67157 10.5 9.5C10.5 10.3284 11.1716 11 12 11Z" fill="currentColor" />
                </svg>
              </button>
            </div>
            <div className="flex items-baseline">
              <span className="text-[26px] font-medium text-[#21262A] mr-2">--<span className="text-[22px]">%</span></span>
              <span className="text-[14px] text-[#60676c]">--</span>
            </div>
            <span className="text-[12px] text-[#60676c]">-- SMS captures</span>
          </div>
        </div>
      </div>
    </div>
  );
}
