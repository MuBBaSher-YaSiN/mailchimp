"use client";

import React from "react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 py-6 px-4 md:px-6 bg-white z-10 border-b border-[#e6e6e6] flex items-center justify-between flex-wrap gap-4 sm:gap-0">
      {/* Left side - Home title */}
      <h1 className="heading_text">Contacts</h1>

      {/* Right side - Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
        {/* Quick Actions Dropdown */}
        <div className="relative w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-3 py-1 text-sm sm:px-4 sm:py-1.5 border border-[#d9d9d9] rounded-md bg-white text-[#333] hover:bg-gray-50 flex items-center justify-between sm:justify-center gap-1 sm:gap-2 font-medium transition-colors"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>More options</span>
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
          className="w-full sm:w-auto px-3 py-1 text-sm sm:px-4 sm:py-1.5 bg-[#007c89] hover:bg-[#005d68] text-white rounded-md font-medium transition-colors"
        >
          Add contacts
        </button>
      </div>
    </header>
  );
}
