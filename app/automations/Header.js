"use client";

import React from "react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 h-20 px-4 sm:px-6 md:px-10 bg-white z-10 border-b border-[#e6e6e6] flex items-center justify-between">
      {/* Left side - Home title */}
      <h1 className="text-base sm:text-xl lg:text-2xl font-semibold">Automation flows</h1>

      {/* Right side - Actions */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        {/* Quick Actions Dropdown */}
        <div className="relative">
          <button
            className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm border border-[#d9d9d9] rounded-md bg-white text-[#333] hover:bg-gray-50 flex items-center gap-1 sm:gap-2 font-medium transition-colors"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>Quick actions</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
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
        </div>

        {/* Create Email Button */}
        <button
          className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-[#007c89] hover:bg-[#005d68] text-white rounded-md font-medium transition-colors whitespace-nowrap"
        >
          Choose flow template
        </button>
      </div>
    </header>
  );
}
