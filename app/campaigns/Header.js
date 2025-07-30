"use client";

import React from "react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 h-auto sm:h-20 min-h-20 px-4 sm:px-6 md:px-10 bg-white z-10 border-b border-[#e6e6e6] flex flex-wrap items-center justify-between gap-4">
      {/* Left side - Home title */}
      <h1 className="text-base sm:text-xl lg:text-2xl font-semibold">All campaigns</h1>

      {/* Right side - Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
        {/* View Analytics Button */}
        <div className="relative w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-3 sm:px-4 py-1.5 text-xs sm:text-sm border border-[#d9d9d9] rounded-md bg-white text-[#21262a] hover:bg-gray-50 flex items-center justify-between sm:justify-center gap-1 sm:gap-2 font-medium transition-colors"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>View analytics</span>
          </button>
        </div>

        {/* Create Button */}
        <button
          className="w-full sm:w-auto px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-[#007c89] hover:bg-[#005d68] text-white rounded-md font-medium transition-colors"
        >
          Create
        </button>
      </div>
    </header>
  );
}
